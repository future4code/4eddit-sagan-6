import React from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { routes } from '../Router'
import { getPosts, getPostDetails, } from '../../actions'
import { likeDeslikePost } from '../../actions/handleLike'
import { createNewPost } from '../../actions/createPostAndComment'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

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
      text: '',
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToLoginPage()
    }
    this.props.getPosts()
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
    this.setState({
      title: '',
      text: '',
    })
  }

  handlePostDetail = id => {
    this.props.getPostDetails(id)
  }

  handleLikeDeslikePost = (number, id) => {
    const namePage = 'userPage'
    this.props.likeDeslikePost(number, id, namePage)
  }

  render() {
    console.log()
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
        {this.props.postList.length === 0 ? <CircularProgress/> :
          this.props.postList.map(data => {
            return (
              <Card
                key={data.id}
                avatar={data.username.substr(0, 1)}
                title={data.title}
                text={data.text}
                postDetail={() => this.handlePostDetail(data.id)}
                handleLikeDeslikePost={this.handleLikeDeslikePost}
                id={data.id}
                votesCount={data.votesCount}
                userVoteDirection={data.userVoteDirection}
                name = {data.username}

              />)
          })}
      </ListPost>
    )
  }
}

const mapStateToProps = state => {
  return {
    postList: state.postList.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    createNewPost: (title, text) => dispatch(createNewPost(title, text)),
    getPosts: () => dispatch(getPosts()),
    getPostDetails: id => dispatch(getPostDetails(id)),
    likeDeslikePost: (number, id, namePage) => dispatch(likeDeslikePost(number, id, namePage))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)