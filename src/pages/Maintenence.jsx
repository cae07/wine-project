import React from 'react';
import { useNavigate } from 'react-router-dom';
import manutencao from '../images/manutecao.jpg'
import '../css/maintenence.css';

function Maintenence() {
  const navigate = useNavigate();

  return (
    <div className="maintenence-container">
      <button
        type="button"
        className="return-button"
        onClick={ () => navigate("/") }
      >
        { `< Voltar` }
      </button>
      <img src={ manutencao } alt="Página em manutenção" />
    </div>
  );
}

export default Maintenence;
