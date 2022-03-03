import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterBar() {
  const {
    columnsIn,
    columnsOut,
    filterByNumericValues,
    functions: { setColumnsIn, setColumnsOut, setFilterByNumericValues,
      setRemoveFilter },
  } = useContext(MyContext);

  function handleRemoveFilter({ target }) {
    setRemoveFilter(() => true);
    const newData = [...filterByNumericValues]
      .filter((filter) => filter.column !== target.name);
    setFilterByNumericValues(newData);

    const newColumnsIn = columnsOut.filter((col) => col.name === target.name);
    setColumnsIn(columnsIn.concat(newColumnsIn));
    const newColumnsOut = columnsOut.filter((col) => col.name !== target.name);
    setColumnsOut(newColumnsOut);
  }

  return (
    <section className="filter__bar">
      {filterByNumericValues.map((filter, index) => (
        <span key={ index } data-testid="filter">
          <Button
            className="filter__text"
            name={ filter.column }
            onClick={ (event) => handleRemoveFilter(event) }
            type="button"
            variant="danger"
          >
            {`${filter.column}   x`}
          </Button>
        </span>
      ))}
    </section>
  );
}

export default FilterBar;
