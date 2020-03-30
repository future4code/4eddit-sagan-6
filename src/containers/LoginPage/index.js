import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
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

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { user, password } = this.state;

    return (
      <WrapperLoginPage>
        <Form onSubmit={(event) => {event.preventDefault(); this.props.submitLogin(user, password)}}>
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
        <Button onClick={this.props.goToSingUp}>Cadastrar</Button>
      </WrapperLoginPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLogin: (user, password) => dispatch(login(user, password)),
    goToSingUp: () => dispatch(push(routes.singUp))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
