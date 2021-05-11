import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/products')
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const getOneProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`http://localhost:3001/products/`, product)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/products/${id}`)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const updateProduct = async(id, product) => {
  try {
    const response = await axios.put(`http://localhost:3001/products/${id}`, product)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

