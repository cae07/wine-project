import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, ProductDetails } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/:id" element={ <ProductDetails />} />
    </Routes>
  );
}

export default App;
