import axios from 'axios';

const getProducts = async (page) => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`);
  return data;
};

export default getProducts;
