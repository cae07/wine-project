import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import myContext from '../../context/myContext';
import { getProductsByPrice } from '../../services/apiService';

function PrincipalAside() {
  const {
    setAllProducts,
    setTotalItems,
  } = useContext(myContext);

  const handleChange = async ({ target: { value } }) => {
    const filteredproducts = await getProductsByPrice(value);
    setAllProducts(filteredproducts.items);
    setTotalItems(filteredproducts.totalItems);
  };

  return (
    <aside className="aside-container">
      <h2>Refine sua busca</h2>
      <h3>Por preço</h3>
      <Form className="radios-container">
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-1"
          label="Até R$ 40"
          value="0-40"
          onClick={ (e) => handleChange(e) }
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-2"
          label="R$ 40 A R$ 60"
          value="40-60"
          onClick={ (e) => handleChange(e) }
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-3"
          label="R$ 100 A R$ 200"
          value="100-200"
          onClick={ (e) => handleChange(e) }
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-4"
          label="R$ 200 A R$ 500"
          value="200-500"
          onClick={ (e) => handleChange(e) }
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-5"
          label="Acima R$ 500"
          value="500-10000"
          onClick={ (e) => handleChange(e) }
        />
      </Form>
    </aside>
  );
}

export default PrincipalAside;
