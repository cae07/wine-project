import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [allproducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const providerValue = {
    allproducts,
    setAllProducts,
    product,
    setProduct,
  };

  return (
    <myContext.Provider value={ providerValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
