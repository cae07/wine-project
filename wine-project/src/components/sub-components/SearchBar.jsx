import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import myContext from '../../context/myContext';
import { getProductsByName } from '../../services/apiService';

function SearchBar() {
  const { setAllProducts, setTotalItems, setShow } = useContext(myContext);
  const [searchName, setSearchName] = useState('');

  const handleSearch = async () => {
    const productByName = await getProductsByName(searchName)
    setAllProducts(productByName.items);
    setTotalItems(productByName.totalItems);
    setShow(false);
  };

  // css feito na pasta header.css
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          value={ searchName }
          onChange={ (e) => setSearchName(e.target.value) }
          placeholder="digite nome ou parte do nome"
          id="form-search-control"
        />
        <Button
          onClick={ handleSearch }
          type="button"
          id="form-search-button"
        >
          pesquisar...
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
