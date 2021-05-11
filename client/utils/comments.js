import axios from 'axios';

export const getAllCommentsByProductId = async (id) => {
  try {
    const response = await axios.get( `http://localhost:3001/products/${id}/comments`
    )
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const getOneComment = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/comments/${id}`)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const deleteComment = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/comments/${id}`)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}

export const updateComment = async(id, comment) => {
  try {
    const response = await axios.put(`http://localhost:3001/comments/${id}`, comment)
    return response.data
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.message : '';
    return [null, message];
  }
}