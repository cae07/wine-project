import React, { useEffect, useState } from 'react';
import getProducts from '../../services/apiService';

function PrincipalList() {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [actualPage, setActualPage] = useState(0);

  useEffect(() => {
    async function getFirstProducts() {
      const firstProducts = await getProducts(1);
      setProducts(firstProducts.items);
      setTotalItems(firstProducts.totalItems);
      setActualPage(firstProducts.page);
      console.log(firstProducts);
    }
    getFirstProducts();
  }, [])

  console.log(products);
  console.log(totalItems);

  return (
    <main className="list-container">
      <h3>{ `${totalItems} produtos encontrados` }</h3>
      <div className="cards-container">
        {products.map((product) => (
          <section className="cards" key={ product.id }>
            <div className="product-card">
              <img src={ product.image } alt={ product.name } width="100px" />
              <p>{ product.name }</p>
              <div className="full-price">
                <span id="span-price">{ (product.price).toFixed(2) }</span>
                <span id="discount">60% off</span>
              </div>
              <div className="socio-price">
                <p>SÓCIO WINE</p>
                <p id="socio-price-detail">R$</p>
                <p id="socio-price-detail" className="focus-price">
                  { (product.priceMember).toFixed(2) }
                </p>
              </div>
              <span id="non-socio">
                { `NÃO SÓCIO R$ ${(product.priceNonMember).toFixed(2)}` }
              </span>
            </div>
            <button>ADICIONAR</button>
          </section>
        ))}
      </div>
      <nav className="next-buttons-container">
        <button
          type="button"
          id="next-button"
          className="next-button-1"
        >
            { actualPage }
        </button>
        <button
          type="button"
          id="next-button"
          className="next-button-2"
        >
        { actualPage + 1 }
        </button>
        <button
          type="button"
          id="next-button"
          className="next-button-1"
        >
        { actualPage + 2 }
        </button>
        <button
          type="button"
          id="next-button"
          className="button-next"
        >
          { `Próximo >>` }
        </button>
      </nav>
    </main>
  );
}

export default PrincipalList;
