import React, { useState } from 'react';
import logo from '../images/logo.jpeg';
import '../css/header.css';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './sub-components';

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleHeaderButton = async ({ target: { value } }) => {
    if (value !== "Loja") {
      return navigate("/maintenence");
    }

    window.location.reload();
  };

  const handleSearch = () => {
    setShow(!show);
  };

  const handleProfile = () => {
    console.log('user');
  }

  const handleCart = () => {
    console.log('carrinho');
  }

  return(
    <header>
      <div className="header-container">
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
          <button
            id="icons-buttons"
            onClick={ handleSearch }
          >
            <i className="fas fa-search" />
          </button>
          <button
            id="icons-buttons"
            onClick={ handleProfile }
          >
            <i className="far fa-user" />
          </button>
          <button
            id="icons-buttons"
            name="cart"
            onClick={ handleCart }
          >
          <i className="fa fa-shopping-cart" />
          </button>
        </nav>
      </div>
      { show && <SearchBar /> }
    </header>
    
  );
}

export default Header;
