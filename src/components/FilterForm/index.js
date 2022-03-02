import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterForm() {
  const [column, setColumnField] = useState('population');
  const [comparison, setComparisonField] = useState('maior que');
  const [value, setNumberField] = useState(0);
  const {
    columnsIn,
    columnsOut,
    filterByName: { filterByName },
    filterByNumericValues,
    filteredData,
    order,
    functions: { setColumnsIn, setColumnsOut, setFilterByName, setFilterByNumericValues,
      setFilteredData, setOrder },
  } = useContext(MyContext);

  function handleFilterForm(event) {
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
  // (sort === 'ASC')
  // a[columnOrder].localeCompare(b[columnOrder])
  function handleOrder(event) {
    event.preventDefault();
    const { column: columnOrder, sort } = order;
    const newData = filteredData.sort((a, b) => (
      (sort === 'ASC')
        ? a[columnOrder].localeCompare(b[columnOrder])
        : b[columnOrder].localeCompare(a[columnOrder])
    ));
    setOrder({ column: 'population', sort: 'ASC' });
    setFilteredData(() => (newData));
    console.log(filteredData, 'filtered');
  }

  return (
    <Form>
      <Form.Group className="filter__name" controlId="planetName">
        <div>
          <Form.Label>Filter by Name</Form.Label>
          <Form.Control
            data-testid="name-filter"
            onChange={ ({ target }) => setFilterByName(target.value) }
            placeholder="Type the planet name"
            type="text"
            value={ filterByName }
          />
        </div>
      </Form.Group>
      <Form.Group className="filter__numeric" controlId="columnName">
        <div className="filter__column">
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
        </div>
        <div className="filter__comparison">
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
        </div>
        <div className="filter__number">
          <Form.Label>Number</Form.Label>
          <Form.Control
            data-testid="value-filter"
            name="numberFilter"
            onChange={ ({ target }) => setNumberField(target.value) }
            type="number"
            value={ value }
          />
        </div>
        <Button
          className="filter__remove"
          data-testid="button-filter"
          onClick={ (event) => handleFilterForm(event) }
          type="submit"
          variant="warning"
        >
          Filter
        </Button>
      </Form.Group>
      <Form.Group className="filter__order" controlId="order">
        <div className="filter__sort">
          <Form.Check
            data-testid="column-sort-input-asc"
            type="radio"
            label="Asc"
            name="orderOption"
            value="ASC"
            onChange={ () => setOrder({ ...order, sort: 'ASC' }) }
          />
          <Form.Check
            data-testid="column-sort-input-desc"
            type="radio"
            label="Desc"
            name="orderOption"
            value="DESC"
            onChange={ () => setOrder({ ...order, sort: 'DESC' }) }
          />
        </div>
        <div className="filter__sortColumn">
          <Form.Label>Order By</Form.Label>
          <Form.Select
            data-testid="column-sort"
            name="orderFilter"
            onChange={ ({ target }) => setOrder({ ...order, column: target.value }) }
            value={ order.column }
          >
            {[...columnsIn, ...columnsOut].map(({ name }, index) => (
              <option key={ index } value={ name }>{ name }</option>
            ))}
          </Form.Select>
        </div>
        <Button
          className="filter__btn-order"
          data-testid="column-sort-button"
          onClick={ (event) => handleOrder(event) }
          type="submit"
          variant="warning"
        >
          Sort
        </Button>
        <Button
          className="filter__btn-reset"
          data-testid="button-remove-filters"
          onClick={ (event) => handleResetFilters(event) }
          type="submit"
          variant="danger"
        >
          Reset Filter
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FilterForm;
