import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [product, setProduct] = useState([]);

  const providerValue = {
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
