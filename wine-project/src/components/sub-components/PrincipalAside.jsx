import React from 'react';

function PrincipalAside() {
  return (
    <aside className="aside-container">
      <h2>Refine sua busca</h2>
      <h3>Por preço</h3>
      <form className="radios-container">
        <label htmlFor="fourty">
          <input id="fourty" type="radio" name="price-search" value="fourty" />
          Até R$40
        </label>
        <label htmlFor="sixty">
          <input id="sixty" type="radio" name="price-search" value="sixty" />
          R$40 A R$60
        </label>
        <label htmlFor="twoHundred">
          <input id="twoHundred" type="radio" name="price-search" value="twoHundred" />
          R$100 A R$200
        </label>
        <label htmlFor="fiveHundred">
          <input id="fiveHundred" type="radio" name="price-search" value="fiveHundred" />
          R$200 A R$500
        </label>
        <label htmlFor="fiveHundredAbove">
          <input id="fiveHundredAbove" type="radio" name="price-search" value="fiveHundredAbove" />
          Acima R$500
        </label>
      </form>
    </aside>
  );
}

export default PrincipalAside;
