import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterByNumericValues() {
  const [column, setColumnField] = useState('population');
  const [comparison, setComparisonField] = useState('maior que');
  const [value, setNumberField] = useState(0);
  const {
    columnsIn,
    columnsOut,
    filterByNumericValues,
    functions: { setColumnsIn, setColumnsOut, setFilterByNumericValues },
  } = useContext(MyContext);

  function handleFilterByNumericValues(event) {
    event.preventDefault();
    setFilterByNumericValues([...filterByNumericValues,
      { column, comparison, value }]);
    const newColumnsOut = columnsIn.filter((col) => col.name === column);
    setColumnsOut(columnsOut.concat(newColumnsOut));
    const newColumnsIn = columnsIn.filter((col) => col.name !== column);
    setColumnsIn(newColumnsIn);
  }

  function handleResetFilters(event) {
    event.preventDefault();
    setColumnsIn([...columnsIn, ...columnsOut]);
    setColumnsOut([]);
    setFilterByNumericValues([]);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="columnName">
        <Form.Label>Column</Form.Label>
        <Form.Select
          data-testid="column-filter"
          name="columnFilter"
          onChange={ ({ target }) => setColumnField(target.value) }
          value={ column }
        >
          {columnsIn.map(({ name }, index) => (
            <option key={ index } value={ name }>{ name }</option>
          ))}
        </Form.Select>
        <Form.Label>Condition</Form.Label>
        <Form.Select
          data-testid="comparison-filter"
          name="comparisonFilter"
          onChange={ ({ target }) => setComparisonField(target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </Form.Select>
        <Form.Label>Number</Form.Label>
        <Form.Control
          data-testid="value-filter"
          name="numberFilter"
          onChange={ ({ target }) => setNumberField(target.value) }
          type="number"
          value={ value }
        />
        <Button
          className="filter__remove"
          data-testid="button-filter"
          onClick={ (event) => handleFilterByNumericValues(event) }
          type="submit"
          variant="warning"
        >
          Filter
        </Button>
        <Button
          className="filter__removeAll"
          data-testid="button-remove-filters"
          onClick={ (event) => handleResetFilters(event) }
          type="submit"
          variant="danger"
        >
          Remove All
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FilterByNumericValues;
