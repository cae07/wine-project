import React from 'react';
import { PrincipalAside, PrincipalList } from './sub-components';
import "../css/products.css";

function Products() {
  return (
    <section className="principal-container">
      <PrincipalAside />
      <PrincipalList />
    </section>
  )
}

export default Products;
