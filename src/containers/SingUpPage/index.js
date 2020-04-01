import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singUp } from '../../actions/auth';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Header from '../../components/Header';

const WrapperSingUpPage = styled.div`
  width: 20vw;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

class SingUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      email: '',
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
    const { userName, email, password } = this.state;
    return (
      <div>
        <Header/>
        <WrapperSingUpPage>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.submitSingUp(userName, email, password)
            }}>
            <Input name='userName' type='text'
              value={userName}
              onChange={this.handleChangeInput}
              placeholder='Digite seu nome de usuário.'
              required
            />
            <Input name='email' type='email'
              value={email}
              onChange={this.handleChangeInput}
              placeholder='Digite seu email.'
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
            <Button color='primary' type='submit'>Cadastrar</Button>
          </Form>
        </WrapperSingUpPage>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitSingUp: (userName, email, password) => dispatch(singUp(userName, email, password))
  }
}


export default connect(null, mapDispatchToProps)(SingUp);