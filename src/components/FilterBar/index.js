import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../../context/MyContext';
import './style.css';

function FilterBar() {
  const {
    columns,
    data,
    dataCopy1,
    filterBar,
    filterByNumericValues,
    filteredData,
    functions: { handlePlanets, setColumns, setDataCopy1, setFilterBar, setFilterByNumericValues, setFilteredData, setRemoveFilter },
  } = useContext(MyContext);
  const { columnName, columnPosition } = columns;
  const { filterName, filterPosition } = filterBar;
  


  function handleRemoveFilter({ target }) {
    // const filterIndex = filterName.indexOf(target.name);
    // const newData = dataCopy.filter((planet) => (
    //   checkFilterByNumeric(planet, index)
    // ));
    // handlePlanets();
    setRemoveFilter(true);
    const newData = filterByNumericValues.filter((filter) => filter.column !== target.name);

    // filteredIndex += 1;
    // setDataCopy(newData);
    setFilterByNumericValues(newData);
    // const remove = filterByNumericValues
    //   .filter((filter) => filter.column !== target.name);
    // setFilterByNumericValues(remove);
    // columnName.splice(filterPosition[filterIndex], 0, filterName[filterIndex]);
    // columnPosition.splice(filterPosition[filterIndex], 0, filterPosition[filterIndex]);
    // setColumns({
    //   ...columns,
    //   columnName,
    //   columnPosition,
    // });
    // filterName.splice(filterIndex, filterIndex + 1);
    // filterPosition.splice(filterIndex, filterIndex + 1);
    // console.log(filterName, 'filtername', filterIndex, 'filterindex');
    // console.log(filterPosition, 'filterposition', filterIndex + 1, 'filter + 1');
    // setFilterBar({
    //   ...filterBar,
    //   filterName,
    //   filterPosition,
    // });
  }

  useEffect(() => {
    setFilteredData([...data]);
  }, [filterByNumericValues]);

  return (
    <section className="filter__bar">
      {filterByNumericValues.map((filter, index) => (
        <Button
          className="filter__text"
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
