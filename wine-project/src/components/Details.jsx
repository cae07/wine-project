import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';
import StarCreator from '../utils/StarCreator';
import star from '../images/star.png';
import { useNavigate } from 'react-router-dom';
import { getItemsSold, setItemsSold } from '../utils/localStorage';

function Details() {
  const { product } = useContext(myContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleLess = () => {
    if (quantity === 0) return null;
    setQuantity(quantity - 1);
  };

  const handleMore = () => {
    setQuantity(quantity + 1);
  };

  const handleItemToCart = () => {
    const newSale = {
      id: product.id,
      name: product.name,
      volume: product.volume || product.size,
      quantity,
      price: product.priceMember,
    };

    const getItemsFromStorage = getItemsSold();
    getItemsFromStorage.push(newSale);

    setItemsSold(getItemsFromStorage);
    navigate("/success");
  };

  return (
    <main>
      <nav>
        <button
          onClick={ () => navigate("/")}
          className="return-button"
        >
          { `< Voltar` }
        </button>
      </nav>
      <section className="details-container">
        <img src={ product.image } alt={ product.name } />
        <aside className="aside-details-container">
          <section>
            <span id="detail-span">Vinhos</span>
            <span className="arrow" id="detail-span">{ `>` }</span>
            <span id="detail-span">{product.country}</span>
            <span className="arrow" id="detail-span">{ `>` }</span>
            <span>{product.region}</span>
          </section>
          <h2>{ product.name }</h2>
          <section className="detail-info-rating-container">
            <img src={ product.flag } alt={ `Bandeira ${product.country}` } width="15px" />
            <span>
              {
                `${product.country}
                ${product.type}
                ${product.classification}
                ${product.size || product.volume}`
              }
            </span>
            <div>
              { StarCreator(product.rating).map((item) => (
                <img key={ item } src={ star } alt="estrela dourada" width="20px" />
              ))}
            </div>
          </section>
          <h1 id="detail-price-member">{`R$ ${(product.priceMember).toFixed(2)}` }</h1>
          <span className="detail-price-nomsocio">
            { `NÃO SÓCIO R$ ${(product.priceNonMember).toFixed(2)}/UN.` }
          </span>
          <h4>Comentário do Sommelier</h4>
          <p>{ product.sommelierComment }</p>
          <div className="detail-add-button">
            <button type="button" onClick={ handleLess }>-</button>
            <input type="text" value={ quantity } />
            <button type="button" onClick={ handleMore }>+</button>
            <button
              type="button"
              onClick={ handleItemToCart }
            >
              ADICIONAR
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Details;
