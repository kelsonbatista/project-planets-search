import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const ZERO = 0;
  const ONE = 1;
  const TWO = 2;
  const THREE = 3;
  const FOUR = 4;
  const [columns, setColumns] = useState({
    columnName:
      ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    columnPosition: [ZERO, ONE, TWO, THREE, FOUR],
  });
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

  // console.log(Number(planet[column]) > (value), Number(planet[column]), column, comparison, value);

  // function checkFilterByNumeric(planet) {
  //   const { column, comparison, value } = filterByNumericValues[0];
  //   // setFilterBar({ ...filterBar, filterName, filterPosition });
  //   switch (comparison) {
  //   case 'maior que':
  //     return (Number(planet[column]) > Number(value));
  //   case 'menor que':
  //     return (Number(planet[column]) < Number(value));
  //   default:
  //     return (Number(planet[column]) === Number(value));
  //   }
  // }

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

  // useEffect(() => {
  //   if (filterByNumericValues.length > 0) {
  //     const filteredDataCopy = [...filteredData];
  //     setFilteredData(filteredDataCopy.filter((planet) => (
  //       checkFilterByNumeric(planet)
  //     )));
  //   } else {
  //     setFilteredData(data.filter((planet) => planet));
  //   }
  // }, [filterByNumericValues]);

  const allData = {
    columns,
    data,
    filterBar,
    filterByName: { filterByName },
    filterByNumericValues,
    filteredData,
    removeFilter,
    functions: {
      handlePlanets,
      setColumns,
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
