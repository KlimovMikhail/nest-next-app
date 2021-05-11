import axios from "axios";
import * as types from './types'


const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/products')
      console.log('responcs', response);
      dispatch({
        type: types.GET_ALL_PRODUCTS_SUCCESS,
        payload: response
      })
    } catch (e) {
      dispatch({
        type: types.GET_ALL_PRODUCTS_FAIL,
        payload: 'Произошла ошибка при загрузке'
      })
    }
  }
}
export default fetchProducts

// export const getAllProducts = (payload) => ({
//   type: types.GET_ALL_PRODUCTS,
//   payload
// })

// export const getAllProductsSucsess = (payload) => ({
//   type: types.GET_ALL_PRODUCTS_SUCCESS,
//   payload
// })