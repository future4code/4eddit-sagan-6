import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

export const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit/';

export const getPosts = () => async dispatch => {
  try {
    const token = window.localStorage.getItem('token')
    const response = await axios.get(`${baseUrl}posts`,
      {
        headers: {'auth': token}
      }
    )
    dispatch(getPostToReducer(response.data.posts))
  } catch (error) {
    console.error(error.message)
  }
}

export const getPostToReducer = (data) => (
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

    dispatch(getPostDetailsToReducer(response.data.post))
    dispatch(push(routes.postDetails = response.data.post.id))

  } catch (error) {
    console.error(error.message)
  }
}

export const getPostDetailsToReducer = (data) => ({
  type: "POST_DETAILS",
  payload: { data }
})



