import React from 'react';
import logo from "../images/logo.jpeg";

function Header() {
  return(
    <div>
      <img
        src={ logo }
        alt="Logo Wine - O maior clube de vinhos do mundo"
        width="130px"
      />
      <button>
        Clube
      </button>
      <button>
        Loja
      </button>
      <button>
        Produtores
      </button>
      <button>
        Ofertas
      </button>
      <button>
        Eventos
      </button>
      <button>
        <i className="fas fa-search" />
      </button>
      <button>
        <i className="far fa-user" />
      </button>
      <button>
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      </button>
    </div>
    
  );
}

export default Header;
