import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';

function FilterByNumericValues() {
  const [column, setColumnField] = useState('population');
  const [comparison, setComparisonField] = useState('maior que');
  const [value, setNumberField] = useState(0);

  const {
    functions: {
      setFilterByNumericValues,
    },
  } = useContext(MyContext);

  function handleFilterByNumericValues(event) {
    event.preventDefault();
    setFilterByNumericValues([{ column, comparison, value }]);
  }

  // const allColumns = data.length > 0 && Object.keys(data[0]);
  // console.log(allColumns, 'All columns');
  // const columns = data.length > 0 && allColumns.map((column) => (
  //   (column.charAt(0).toUpperCase() + column.slice(1)).replace('_', ' ')
  // ));
  // console.log(columns, 'columns');
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

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
          {columns.map((aColumn, index) => (
            <option key={ index } value={ aColumn }>{ aColumn }</option>
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
          data-testid="button-filter"
          onClick={ (event) => handleFilterByNumericValues(event) }
          type="submit"
          variant="warning"
        >
          Filter
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FilterByNumericValues;
