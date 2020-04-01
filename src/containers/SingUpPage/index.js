import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singUp } from '../../actions/auth';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { goBack } from 'connected-react-router'
import Header from '../../components/Header';
import { FormLoginAndCreateUserPage, WrapperLoginAndCreateUserPage } from '../../style/styles'



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
        <Header />
        <WrapperLoginAndCreateUserPage>
          <FormLoginAndCreateUserPage
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
          </FormLoginAndCreateUserPage>
          <Button color='secondary'
            onClick={this.props.goBack}
          >Voltar</Button>
        </WrapperLoginAndCreateUserPage>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitSingUp: (userName, email, password) => dispatch(singUp(userName, email, password)),
    goBack: () => dispatch(goBack())
  }
}


export default connect(null, mapDispatchToProps)(SingUp);