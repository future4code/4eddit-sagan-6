import axios from 'axios';
import { baseUrl } from '../actions/index'
import { getPosts, getPostDetails } from './index'

export const createNewPost = (title, text) => async dispatch => {
    const titleAndText = {title,text}
    try {
  
      const token = window.localStorage.getItem('token');
  
      const response = await axios.post(`${baseUrl}posts`,titleAndText,
        {
          headers: {'auth': token}
        })
      dispatch(getPosts())
    } catch (error) {
      console.error(error.message)
    }
  }

  export const createNewComment = (comment, id) => async dispatch => {
    try {
      const idPost = window.localStorage.getItem('id')
      const token = window.localStorage.getItem('token');
  
      await axios.post(`${baseUrl}posts/${id}/comment`, {
        'text': comment
      }, {
        headers: {
          'Type-Content': 'application/json',
          'auth': token
        }
      })
      dispatch(getPostDetails(idPost))
    } catch (error) {
      console.error(error.message)
    }
  }
  