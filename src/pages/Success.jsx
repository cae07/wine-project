import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/sucess.css';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, []);

  return (
    <div className="success-container">
      <h1>Produto adicionado com sucesso</h1>
    </div>
  );
}

export default Success;
