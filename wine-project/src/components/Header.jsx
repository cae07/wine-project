import React, { useContext } from 'react';
import logo from '../images/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './sub-components';
import myContext from '../context/myContext';
import '../css/header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  const { show, setShow } = useContext(myContext);
  const navigate = useNavigate();

  const handleHeaderButton = async ({ target: { value } }) => {
    if (value !== "Loja") {
      return navigate("/maintenence");
    }

    // pesquisa sobre reload de pag
    // https://pt.stackoverflow.com/questions/251826/reload-de-p%C3%A1gina-web
    window.location.reload();
  };

  const handleSearch = () => {
    setShow(!show);
  };

  const handleProfile = () => {
    navigate("/maintenence");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">
            <img
              src={ logo }
              alt="Logo Wine - O maior clube de vinhos do mundo"
              width="100px"
            />          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
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
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="">
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
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      { show && <SearchBar /> }
    </header>
  );
}

export default Header;
