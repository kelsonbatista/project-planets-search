import React from 'react';
import FilterByName from '../FilterByName';
import FilterByNumericValues from '../FilterByNumericValues';
import FilterBar from '../FilterBar';

function FormApp() {
  return (
    <>
      <FilterByName />
      <FilterByNumericValues />
      <FilterBar />
    </>
  );
}

export default FormApp;
