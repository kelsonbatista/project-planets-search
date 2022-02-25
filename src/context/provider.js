import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsApi from '../services/planetsApi';
import PlanetsContext from './context';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  async function handlePlanets() {
    const fetchPlanets = await fetchPlanetsApi();
    setData(fetchPlanets);
  }

  useEffect(() => {
    handlePlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
