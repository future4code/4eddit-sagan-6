import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { routes } from '../Router';
import { push } from 'connected-react-router';

const WrapperLoginPage = styled.div`
  width: 20vw;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  componentDidMount(){
    const token = window.localStorage.getItem('token')
    console.log(token)
    if(token !== null ){
      this.props.goToUserPage()
    }
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmitLogin = event =>{
    const { user, password } = this.state;
    event.preventDefault()
    this.props.submitLogin(user, password)
  }

  render() {
    const { user, password } = this.state;
    return (
      <WrapperLoginPage>
        <Form onSubmit={this.handleSubmitLogin}>
          <Input name='user' type='email'
            value={user}
            onChange={this.handleChangeInput}
            placeholder='Digite seu nome de usuário.'
            required
          />
          <Input
            name='password'
            type='password'
            value={password}
            onChange={this.handleChangeInput}
            placeholder='Digite sua senha.'
            required
          />
          <Button color='primary' type='submit'>Entrar</Button>
        </Form>
        <Button onClick={this.props.goToSingUpPage}>Cadastrar</Button>
      </WrapperLoginPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLogin: (user, password) => dispatch(login(user, password)),
    goToSingUpPage: () => dispatch(push(routes.singUpPage)),
    goToUserPage : () => dispatch(push(routes.userPage))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
