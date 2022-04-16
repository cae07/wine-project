import React from 'react';
import { Form } from 'react-bootstrap';

function PrincipalAside() {
  return (
    <aside className="aside-container">
      <h2>Refine sua busca</h2>
      <h3>Por preço</h3>
      <Form className="radios-container">
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-1"
          label="Até R$40"
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-2"
          label="R$40 A R$60"
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-3"
          label="R$100 A R$200"
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-4"
          label="R$200 A R$500"
        />
        <Form.Check 
          type="radio"
          name="price"
          id="default-radio-5"
          label="Acima R$500"
        />
      </Form>
    </aside>
  );
}

export default PrincipalAside;
