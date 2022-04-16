import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [allproducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [actualPage, setActualPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [productPage, setProductPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [show, setShow] = useState(false);
  const [soldItems, setSoldItems] = useState([]);

  const providerValue = {
    allproducts,
    setAllProducts,
    product,
    setProduct,
    actualPage,
    setActualPage,
    totalPages,
    setTotalPages,
    productPage,
    setProductPage,
    totalItems,
    setTotalItems,
    show,
    setShow,
    soldItems,
    setSoldItems,
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
