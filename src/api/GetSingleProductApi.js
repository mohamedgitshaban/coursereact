import axios from 'axios';
async function GetSingleProductApi(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default GetSingleProductApi;