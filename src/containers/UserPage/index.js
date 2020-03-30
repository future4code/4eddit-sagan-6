import React from 'react'
import Post from '../../components/Card'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { routes } from '../Router'
import { createNewPost, getPost } from '../../actions'


const ListPost = styled.div`
width: 45vw;
margin: auto;
form{
  display: flex;
  flex-direction: column;
}
;
`
class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === '') {
      this.props.goToLoginPage()
    }
    this.props.getPosts()
    console.log(this.props.postList)
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleNewPost = event => {
    const { title, text } = this.state
    event.preventDefault()
    this.props.createNewPost(title, text)
  }

  renderPost = () => {
      let test =this.props.postList.map(data => {
        return ( <p>{data.text}</p> )
      })
      console.log(test)
      return test
      
    }

  render() {
    const { title, text } = this.state

    return (
      <ListPost>
        <form
          onSubmit={this.handleNewPost}
        >
          <TextField
            value={title}
            onChange={this.handleChangeInput}
            multiline={true}
            label="Título do post"
            name='title'
            required
          />
          <TextField
            value={text}
            onChange={this.handleChangeInput}
            multiline={true}
            label="Texto do post"
            name='text'
            required
          />
          <Button
            type='submit'
            color='primary'>
            Publicar
        </Button>
        </form>
        {this.renderPost()}
      </ListPost>
    )
  }
}

const mapStateToProps = state => {
  return {
    postList: state.postList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    createNewPost: (title, text) => dispatch(createNewPost(title, text)),
    getPosts: () => dispatch(getPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)