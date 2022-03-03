import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const MINUS_ONE = -1;
  const ZERO = 0;
  const ONE = 1;
  const TWO = 2;
  const THREE = 3;
  const FOUR = 4;
  const [columnsIn, setColumnsIn] = useState([
    { name: 'population', position: ZERO },
    { name: 'orbital_period', position: ONE },
    { name: 'diameter', position: TWO },
    { name: 'rotation_period', position: THREE },
    { name: 'surface_water', position: FOUR },
  ]);
  const [columnsOut, setColumnsOut] = useState([]);
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });
  const [removeFilter, setRemoveFilter] = useState(false);
  let filteredIndex = 0;
  const [count, setCount] = useState(0);

  async function handlePlanets() {
    const { results } = await fetchPlanetsApi();
    const newData = results.sort((a, b) => {
      a = a.name || '';
      b = b.name || '';
      return a.localeCompare(b);
    });
    // if (newData.length > 0) console.log(typeof newData.name, 'type of');
    setData(newData);
    setFilteredData(newData);
  }

  function checkFilterByNumeric(planet, index) {
    const filter = filterByNumericValues[index];
    switch (filter.comparison) {
    case 'maior que':
      return (Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return (Number(planet[filter.column]) < Number(filter.value));
    default:
      return (Number(planet[filter.column]) === Number(filter.value));
    }
  }

  function handleUpdate(remove) {
    if (filterByNumericValues.length === 0) setFilteredData(() => [...data]);
    while (filteredIndex < filterByNumericValues.length) {
      const index = filteredIndex;
      const sourceData = remove ? [...data] : [...filteredData];
      const newData = sourceData.filter((planet) => (
        checkFilterByNumeric(planet, index)
      ));
      filteredIndex += 1;
      setFilteredData(() => (newData));
      setCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (removeFilter === true) return handleUpdate('remove');
    handleUpdate();
  }, [filterByNumericValues]);

  useEffect(() => {
    handlePlanets();
  }, []);

  useEffect(() => {
    columnsIn.sort((a, b) => (a.position > b.position ? ONE : MINUS_ONE));
  }, [columnsIn]);

  useEffect(() => {
    console.log(filterByName.toLowerCase(), 'name');
    setFilteredData(data.filter((planet) => (
      ((planet.name).toLowerCase()).includes(filterByName.toLowerCase())
    )));
  }, [filterByName]);

  const allData = {
    columnsIn,
    columnsOut,
    count,
    data,
    filterByName: { filterByName },
    filterByNumericValues,
    filteredData,
    order,
    removeFilter,
    functions: {
      handlePlanets,
      handleUpdate,
      setColumnsIn,
      setColumnsOut,
      setFilterByName,
      setFilterByNumericValues,
      setFilteredData,
      setOrder,
      setRemoveFilter,
    },
  };

  return (
    <MyContext.Provider value={ allData }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default MyProvider;
