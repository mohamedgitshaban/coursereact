import axios from 'axios';
async function GetProductApi() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default GetProductApi;