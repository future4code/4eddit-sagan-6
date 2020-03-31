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
    console.log('segundo console' + response)
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

export const handlePosts = (data) =>(
  {
    type: "GET_POSTS",
    payload: {data}
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
  payload: {data}
})


export const createNewComment = (comment, id) => async dispatch => {
  try {

    const token = window.localStorage.getItem('token');

    await axios.post(`${baseUrl}posts/${id}/comment`, {
      'text': comment
    }, {
      headers: {
        'Type-Content': 'application/json',
        'auth': token
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}