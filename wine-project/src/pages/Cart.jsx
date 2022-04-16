import React from 'react';
import { Table } from 'react-bootstrap';

function Cart() {
  return (
    <main>
      <h3>Finalizar Pedido</h3>
      <Table striped bordered hover>
        <thead>
            <tr>
              <th>Item</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {/* aqui vai o corpo */}
          </tbody>
      </Table>
    </main>
  );
}

export default Cart;
