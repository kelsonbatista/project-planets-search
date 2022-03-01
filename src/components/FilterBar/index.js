import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterBar() {
  const {
    columnsIn,
    columnsOut,
    data,
    filterByNumericValues,
    functions: { setColumnsIn, setColumnsOut, setFilterByNumericValues,
      setFilteredData, setRemoveFilter },
  } = useContext(MyContext);

  function handleRemoveFilter({ target }) {
    setRemoveFilter(true);
    const newColumnsIn = columnsOut.filter((col) => col.name === target.name);
    setColumnsIn(columnsIn.concat(newColumnsIn));
    const newColumnsOut = columnsOut.filter((col) => col.name !== target.name);
    setColumnsOut(newColumnsOut);

    const newData = filterByNumericValues
      .filter((filter) => filter.column !== target.name);
    setFilterByNumericValues(newData);
  }

  useEffect(() => {
    setFilteredData([...data]);
  }, [filterByNumericValues]);

  return (
    <section className="filter__bar">
      {filterByNumericValues.map((filter, index) => (
        <Button
          className="filter__text"
          data-testid="filter"
          key={ index }
          name={ filter.column }
          onClick={ (event) => handleRemoveFilter(event) }
          type="button"
          variant="danger"
        >
          {`${filter.column}   x`}
        </Button>
      ))}
    </section>
  );
}

export default FilterBar;
