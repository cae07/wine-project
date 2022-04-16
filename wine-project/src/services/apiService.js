import axios from 'axios';

const getProducts = async (page) => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`);
  return data;
};

const getProductsByPrice = async (price) => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?filter=${price}`);
  return data;
};

const getProductsByName = async (name) => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?name=${name}`);
  return data;
};

export {
  getProducts,
  getProductsByPrice,
  getProductsByName,
};
