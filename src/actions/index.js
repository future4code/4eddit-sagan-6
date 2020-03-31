import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit/';

export const login = (user, password) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}login`, {
      email: user,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    window.localStorage.setItem('token', response.data.token);

    dispatch(push(routes.userPage))

  } catch (error) {
    console.error(error.message)
  }
}

export const singUp = (userName, email, password) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}signup`, {
      email: email,
      password: password,
      username: userName
    })

    window.localStorage.setItem('token', response.data.token);

  } catch (error) {
    console.log(error.message)
  }
}

export const createNewPost = (title, text) => async dispatch => {
  try {

    const token = window.localStorage.getItem('token');

    const response = await axios.post(`${baseUrl}posts`, {
      text,
      title
    },
      {
        headers: {
          'auth': token
        }
      })
    dispatch(getPost())
  } catch (error) {
    console.error(error.message)
  }
}

export const getPost = () => async dispatch => {
  try {

    const token = window.localStorage.getItem('token');

    const response = await axios.get(`${baseUrl}posts`,
      {
        headers: {
          auth: token
        }
      }
    )
    dispatch(handlePosts(response.data.posts))
  } catch (error) {
    console.error(error.message)
  }
}

export const handlePosts = (data) => (
  {
    type: "GET_POSTS",
    payload: { data }
  }
)


export const getPostDetails = id => async dispatch => {
  try {

    const token = window.localStorage.getItem('token');

    const response = await axios.get(`${baseUrl}posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'auth': token
      }
    })

    window.localStorage.setItem('id', response.data.post.id);

    dispatch(postDetails(response.data.post))
    dispatch(push(routes.postDetails))

  } catch (error) {
    console.error(error.message)
  }
}

export const postDetails = (data) => ({
  type: "POST_DETAILS",
  payload: { data }
})


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

export const likeDeslike = (number, id,namePage) => async dispatch => {
  console.log(number, id)
  try {
    const token = window.localStorage.getItem('token');
    const response = await axios.put(`${baseUrl}posts/${id}/vote`, {
      "direction": number
    },
      {
        headers:
        {
          'Content-Type': ' application/json',
          'auth': token
        }
      }
    )
    namePage === 'userPage' ? dispatch(getPost()) : dispatch(getPostDetails(id))
  }
  catch (error) {
    console.error(error.message)
  }
}

export const likeDeslikeComment = (number, id) => async dispatch => {
  try {
    const token = window.localStorage.getItem('token');
    const idPost = window.localStorage.getItem('id')
    const response = await axios.put(`${baseUrl}posts/${idPost}/comment/${id}/vote`, {
      "direction": number
    },
      {
        headers:
        {
          'Content-Type': ' application/json',
          'auth': token
        }
      }
    )
    console.log(response)
    dispatch(getPostDetails(idPost))

  }
  catch (error) {
    console.error(error.message)
  }
}