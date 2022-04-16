const setItemsSold = (products) => {
  localStorage.setItem('cart', JSON.stringify(products))
  return;
};

const getItemsSold = () => {
  const items = JSON.parse(localStorage.getItem('cart'));
  return items;
};

export { setItemsSold, getItemsSold };