import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [name, setName] = useState('');

  async function handlePlanets() {
    const { results } = await fetchPlanetsApi();
    setData(results);
    setFilteredData(results);
  }

  const value = {
    data,
    filteredData,
    filterByName: { name },
    functions: { setName },
  };

  useEffect(() => {
    handlePlanets();
  }, []);

  useEffect(() => {
    console.log(name.toLowerCase(), 'name');
    setFilteredData(data.filter((planet) => (
      ((planet.name).toLowerCase()).includes(name.toLowerCase())
    )));
  }, [name]);

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default MyProvider;
