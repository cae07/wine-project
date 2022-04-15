import React from 'react';
import logo from '../images/logo.jpeg';
import '../css/header.css';

function Header() {
  return(
    <div className="header-container">
      <div>
        <img
          src={ logo }
          alt="Logo Wine - O maior clube de vinhos do mundo"
          width="100px"
        />
      </div>
      <div>
        <button id="header-buttons">
          Clube
        </button>
        <button id="header-buttons">
          Loja
        </button>
        <button id="header-buttons">
          Produtores
        </button>
        <button id="header-buttons">
          Ofertas
        </button>
        <button id="header-buttons">
          Eventos
        </button>
      </div>
      <div>
        <button id="icons-buttons">
          <i className="fas fa-search" />
        </button>
        <button id="icons-buttons">
          <i className="far fa-user" />
        </button>
        <button id="icons-buttons">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
        </button>
      </div>
    </div>
    
  );
}

export default Header;
