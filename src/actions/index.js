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