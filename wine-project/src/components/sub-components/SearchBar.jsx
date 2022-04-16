import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar() {
  const [searchName, setSearchName] = useState('');

  const handleSearch = ({ target: { name } }) => {
    console.log(name);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        Por nome
        <Form.Control
          type="text"
          value={ searchName }
          onChange={ (e) => setSearchName(e.target.value) }
          placeholder="digite nome do vinho"
        />
        <Button
          name="byName"
          onClick={ (e) => handleSearch(e) }
          variant="success" type="button"
        >
          pesquisar...
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
