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
  const [removeFilter, setRemoveFilter] = useState(false);
  const [filterBar, setFilterBar] = useState({ filterName: [], filterPosition: [] });
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  let filteredIndex = 0;

  async function handlePlanets() {
    const { results } = await fetchPlanetsApi();
    setData(results);
    setFilteredData(results);
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

  useEffect(() => {
    while (filteredIndex < filterByNumericValues.length) {
      const index = filteredIndex;
      const newData = filteredData.filter((planet) => (
        checkFilterByNumeric(planet, index)
      ));
      filteredIndex += 1;
      setFilteredData(newData);
    }
  }, [filterByNumericValues]);

  const allData = {
    columnsIn,
    columnsOut,
    data,
    filterBar,
    filterByName: { filterByName },
    filterByNumericValues,
    filteredData,
    removeFilter,
    functions: {
      handlePlanets,
      setColumnsIn,
      setColumnsOut,
      setFilterBar,
      setFilterByName,
      setFilterByNumericValues,
      setFilteredData,
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
