import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';

function FilterByNumericValues() {
  const [column, setColumnField] = useState('population');
  const [comparison, setComparisonField] = useState('maior que');
  const [value, setNumberField] = useState(0);
  const {
    columnsIn,
    columnsOut,
    data,
    dataCopy,
    filterBar,
    filterByNumericValues,
    filteredData,
    functions: { handlePlanets, setColumnsIn, setColumnsOut, setDataCopy, setFilterBar, setFilterByNumericValues, setFilteredData, setRemoveFilter },
  } = useContext(MyContext);
  // const { columnName, columnPosition } = columnsIn;
  const { filterName, filterPosition } = filterBar;
  let filteredIndex = 0;

  function checkFilterByNumeric(planet, index) {
    // const { column, comparison, value } = filterByNumericValues[0];
    // console.log(filterByNumericValues);
    // console.log(filterByNumericValues[0]);
    // console.log(column, comparison, value, 'info');
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

  // function checkFilterByNumericRemove(planet, filter) {
  //   const { column, comparison, value } = filterByNumericValues[0];
  //   switch (filter.comparison) {
  //   case 'maior que':
  //     return (Number(planet[filter.column]) > Number(filter.value));
  //   case 'menor que':
  //     return (Number(planet[filter.column]) < Number(filter.value));
  //   default:
  //     return (Number(planet[filter.column]) === Number(filter.value));
  //   }
  // }

  function handleFilterByNumericValues(event) {
    event.preventDefault();
    setFilterByNumericValues([...filterByNumericValues,
      { column, comparison, value }]);
    setRemoveFilter(false);
    // const columnIndex = columnName.indexOf(column);
    // const newFilterName = columnName.splice(columnIndex, 1);
    // const newFilterPosition = columnPosition.splice(columnIndex, 1);
    // =======================================================
    // filterName.splice(filterPosition[columnIndex], 0, filterName[columnIndex]);
    // const newFilterName = columnName.splice(columnIndex, 1);
    // const newFilterPosition = columnPosition.splice(columnIndex, 1);
    // console.log(newFilterName, newFilterPosition, 'filter');
    // console.log(columnName, columnPosition, 'column');

    // arr = [...filterName, newFilterName];
    // console.log(arr, 'arr');
    // console.log(...filterName, 'filterName');
    // =======================================================
    // setFilterBar({
    //   ...filterBar,
    //   filterName: filterName.concat(newFilterName),
    //   filterPosition: filterPosition.concat(newFilterPosition),
    // });
    // const columnIndex = columnName.indexOf(column);
    // columnName.splice(columnIndex, 1);
    // columnPosition.splice(columnIndex, 1)
    const newColumnsOut = columnsIn.filter((col) => col.name === column);
    setColumnsOut(columnsOut.concat(newColumnsOut));
    const newColumnsIn = columnsIn.filter((col) => col.name !== column);
    setColumnsIn(newColumnsIn);
  }

  // useEffect(() => {
  //   while (filteredIndex < filterByNumericValues.length) {
  //     const index = filteredIndex;
  //     const newData = filteredData.filter((planet) => (
  //       checkFilterByNumeric(planet, index)
  //     ));
  //     filteredIndex += 1;
  //     setFilteredData(newData);
  //   }
  // }, [filterByNumericValues]);

  // const allColumns = data.length > 0 && Object.keys(data[0]);
  // console.log(allColumns, 'All columns');
  // const columns = data.length > 0 && allColumns.map((column) => (
  //   (column.charAt(0).toUpperCase() + column.slice(1)).replace('_', ' ')
  // ));
  // console.log(columns, 'columns');

  // useEffect(() => {
  //   columns.filter((item) => item !== column);
  // }, removedColumn);

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
