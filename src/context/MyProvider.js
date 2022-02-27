import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  async function handlePlanets() {
    const { results } = await fetchPlanetsApi();
    setData(results);
    setFilteredData(results);
  }

  // console.log(Number(planet[column]) > (value), Number(planet[column]), column, comparison, value);

  function checkFilterByNumeric(planet) {
    const { column, comparison, value } = filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      return (Number(planet[column]) > Number(value));
    case 'menor que':
      return (Number(planet[column]) < Number(value));
    default:
      return (Number(planet[column]) === Number(value));
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
    console.log(filteredData);
  }, [filterByName]);

  useEffect(() => {
    setFilteredData(data.filter((planet) => (
      checkFilterByNumeric(planet)
    )));
    console.log(filteredData, 'filtereddata');
    console.log(filterByNumericValues, 'filterByNumericValues');
  }, [filterByNumericValues]);

  const allData = {
    data,
    filteredData,
    filterByName: { filterByName },
    filterByNumericValues,
    functions: {
      setFilterByName,
      setFilterByNumericValues,
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
