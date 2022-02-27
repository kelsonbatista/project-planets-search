import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';

function FilterByName() {
  const {
    filterByName: { filterByName },
    functions: { setFilterByName },
  } = useContext(MyContext);

  return (
    <Form>
      <Form.Group controlId="planetName">
        <Form.Label>Filter by Planet Name</Form.Label>
        <Form.Control
          data-testid="name-filter"
          onChange={ ({ target }) => setFilterByName(target.value) }
          placeholder="Type the planet name"
          type="text"
          value={ filterByName }
        />
      </Form.Group>
    </Form>
  );
}

export default FilterByName;
