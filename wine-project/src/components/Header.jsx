import React from 'react';
import logo from '../images/logo.jpeg';
import '../css/header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleHeaderButton = ({ target: { value } }) => {
    console.log(value !== "Loja");
    if (value !== "Loja") {
      return navigate("/maintenence");
    }

    return navigate("/");
  };

  return(
    <header className="header-container">
      <div>
        <img
          src={ logo }
          alt="Logo Wine - O maior clube de vinhos do mundo"
          width="100px"
        />
      </div>
      <nav>
        <button
          type="button"
          id="header-buttons"
          value="Clube"
          onClick={ (e) => handleHeaderButton(e) }
        >
          Clube
        </button>
        <button
          type="button"
          id="header-buttons"
          value="Loja"
          onClick={ (e) => handleHeaderButton(e) }
        >
          Loja
        </button>
        <button
          type="button"
          id="header-buttons"
          value="Produtores"
          onClick={ (e) => handleHeaderButton(e) }
        >
          Produtores
        </button>
        <button
          type="button"
          id="header-buttons"
          value="Ofertas"
          onClick={ (e) => handleHeaderButton(e) }
        >
          Ofertas
        </button>
        <button
          type="button"
          id="header-buttons"
          value="Eventos"
          onClick={ handleHeaderButton }
        >
          Eventos
        </button>
      </nav>
      <nav>
        <button id="icons-buttons">
          <i className="fas fa-search" />
        </button>
        <button id="icons-buttons">
          <i className="far fa-user" />
        </button>
        <button id="icons-buttons">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
        </button>
      </nav>
    </header>
    
  );
}

export default Header;
