import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, ProductDetails, Maintenence } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/:id" element={ <ProductDetails />} />
      <Route path="/maintenence" element={ <Maintenence /> } />
    </Routes>
  );
}

export default App;
