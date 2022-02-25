import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import MyContext from '../../context/MyContext';

function FormApp() {
  const {
    filterByName: { name },
    functions: { setName },
  } = useContext(MyContext);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="planetName">
        <Form.Label>Planet Name</Form.Label>
        <Form.Control
          data-testid="name-filter"
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Type the planet name"
          type="text"
          value={ name }
        />
      </Form.Group>
    </Form>
  );
}

export default FormApp;
