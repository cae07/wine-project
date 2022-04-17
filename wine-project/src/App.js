import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Main,
  ProductDetails,
  Maintenence,
  Cart,
  Success,
  ContatoPage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/:id" element={ <ProductDetails />} />
      <Route path="/maintenence" element={ <Maintenence /> } />
      <Route path="cart" element={ <Cart />} />
      <Route path="/success" element={ <Success /> } />
      <Route path="/contatos" element={ <ContatoPage /> } />
    </Routes>
  );
}

export default App;

