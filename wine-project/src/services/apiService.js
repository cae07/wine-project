import axios from 'axios';

const getProducts = async (page) => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`);
  return data;
};

export default getProducts;
