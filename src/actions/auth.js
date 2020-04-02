import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';
import {baseUrl} from '../actions/index'


export const login = (user, password) => async dispatch => {
    const userAndPassword = {
      email: user,
      password,
    }
    try {
      const response = await axios.post(`${baseUrl}login`, userAndPassword,
        {
          headers:
          {
            'Content-Type': 'application/json'
          }
        })
  
      window.localStorage.setItem('token', response.data.token);
  
      dispatch(push(routes.userPage))
  
    } catch (error) {
      alert("Ops! Nome de usuário ou senha estão errados.")
      console.error(error.message)
    }
  }
  
  export const singUp = (userName, email, password) => async dispatch => {
    const userNameAndEmailAndPassword = {
      email,
      password,
      username : userName
    }
    try {
      const response = await axios.post(`${baseUrl}signup`, userNameAndEmailAndPassword)
  
      window.localStorage.setItem('token', response.data.token);
  
    } catch (error) {
      console.log(error.message)
    }
  }