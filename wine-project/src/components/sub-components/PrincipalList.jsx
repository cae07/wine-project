import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import { getProducts } from '../../services/apiService';

function PrincipalList() {
  const {
    setProduct,
    allproducts,
    setAllProducts,
    actualPage,
    setActualPage,
    totalPages,
    setTotalPages,
    productPage,
    setProductPage,
   } = useContext(myContext);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function getFirstProducts() {
      const firstProducts = await getProducts(1);
      setAllProducts(firstProducts.items);
      setTotalItems(firstProducts.totalItems);
      setActualPage(firstProducts.page);
      setProductPage(actualPage);
      setTotalPages(firstProducts.totalPages);
    }
    getFirstProducts();
  }, []);
  
  const handleProductClick = (product) => {
    setProduct(product);
    navigate(`/${product.id}`);
  };

  const handlePage = async ({ target }) => {
    const pageNumber = target.innerText;
    const getNewPage = await getProducts(pageNumber);
    setAllProducts(getNewPage.items);
    setProductPage(getNewPage.page);
  };

  const handleNextPage = async () => {
    const getNewPage = await getProducts(productPage + 1);
    setAllProducts(getNewPage.items);
    setProductPage(getNewPage.page);
    if (productPage >= 3 ) {
      setActualPage(getNewPage.page - 2);
    }
  };

  return (
    <main className="list-container">
      <h3>{ `${totalItems} produtos encontrados` }</h3>
      <div className="cards-container">
        {allproducts.map((product) => (
          <section className="cards" key={ product.id }>
            <div className="product-card">
              <img
                src={ product.flag }
                alt={ `bandeira ${product.country}` }
                width="35px"
              />
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
            <button
              type="button"
              onClick={ () => handleProductClick(product) }
            >
              ADICIONAR
            </button>
          </section>
        ))}
      </div>
      <nav className="next-buttons-container">
        <button
          type="button"
          id="next-button"
          className="next-button-1"
          onClick={ (e) => handlePage(e) }
        >
            { actualPage }
        </button>
        <button
          type="button"
          id="next-button"
          className="next-button-2"
          onClick={ (e) => handlePage(e) }
        >
        { actualPage + 1 }
        </button>
        <button
          type="button"
          id="next-button"
          className="next-button-1"
          onClick={ (e) => handlePage(e) }
        >
        { actualPage + 2 }
        </button>
        {totalPages !== productPage
        ?
        <button
          type="button"
          className="button-next"
          onClick={ handleNextPage }
        >
          { `... Próximo >>` }
        </button>
        : null
        }
      </nav>
    </main>
  );
}

export default PrincipalList;
