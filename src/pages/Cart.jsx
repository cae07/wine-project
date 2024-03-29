import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItemsSold, setItemsSold } from '../utils/localStorage';
import { Table } from 'react-bootstrap';
import logo from '../images/logo.jpeg';
import '../css/cart.css';

function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const soldItems = getItemsSold();
    setItems(soldItems);
  }, [])

  const handleDelete = (productId) => {
    const deleteItem = items.filter((item) => item.id !== productId);
    setItems(deleteItem);
    return setItemsSold(deleteItem);
  };

  const totalValue = () => {
    const total = items
      .reduce((prev, { price, quantity}) => prev + (price * quantity), 0)
      .toFixed(2);
    
      return `Total: ${total}`;
  };

  const handleBuy = () => {
    localStorage.clear();
    return navigate("/contatos");
  };

  return (
    <main>
      <div className="header-cart">
        <img
          src={ logo }
          alt="Logo Wine - O maior clube de vinhos do mundo"
          width="100px"
        />
        <h3>Finalizar Pedido</h3>
        <h3>{ totalValue() }</h3>
      </div>
      <section className="table-container">
        <Table striped bordered hover size="sm">
          <thead>
              <tr>
                <th>Item</th>
                <th>Nome</th>
                <th id="qtd">Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={ idx }>
                  <td>{ idx + 1 }</td>
                  <td>{ item.name }</td>
                  <td id="test">{ item.quantity }</td>
                  <td>{ (item.price).toFixed(2) }</td>
                  <td>{ (item.price * item.quantity).toFixed(2) }</td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => handleDelete(item.id) }
                      id={ `delete-${item.id}-cypress` }
                      className="delete-item-cart-button"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
        <section className="cart-buttons-container">
          <button
            type="button"
            onClick={ () => navigate("/") }
            id="cart-button"
          >
            Continuar compras
          </button>
          <button
            type="button"
            id="cart-button"
            onClick={ handleBuy }
          >
            Finalizar Compra
          </button>
        </section>
      </section>
    </main>
  );
}

export default Cart;
