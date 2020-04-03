import React from 'react'
import Card from '../../components/Card'
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { routes } from '../Router'
import { getPosts, getPostDetails, } from '../../actions'
import { likeDeslikePost } from '../../actions/handleLike'
import { createNewPost } from '../../actions/createPostAndComment'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header';
import { ListPost, Form } from '../../style/styles';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
      filterPosts: '',
      allpostsFilter: undefined,
    }
  }

  componentDidMount() {
    if (this.state.token === null) {
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

  handleEnter = event => {
    if (event.keyCode === 13 && this.state.filterPosts !== '') {
      this.handleFilterPost()
    } else if (event.keyCode === 13) {
      this.handleFilterPost()
      this.setState({
        allpostsFilter: undefined
      })
    }
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

  handleLikePost = (number, id) => {
    const { filterPosts } = this.state
    const result = this.props.postList.find((data) => data.id == id)

    if (result.userVoteDirection === 1) {
      const namePage = 'userPage'
      this.props.likeDeslikePost(0, id, namePage, filterPosts)
    } else {
      const namePage = 'userPage'
      this.props.likeDeslikePost(number, id, namePage, filterPosts)
    }
  }

  handleDeslikePost = (number, id) => {
    const { filterPosts } = this.state
    const result = this.props.postList.find((data) => data.id == id)

    if (result.userVoteDirection === -1) {
      const namePage = 'userPage'
      this.props.likeDeslikePost(0, id, namePage, filterPosts)
    } else {
      const namePage = 'userPage'
      this.props.likeDeslikePost(number, id, namePage, filterPosts)
    }
  }

  handleFilterPost = () => {
    const { filterPosts } = this.state
    const valueFilter = filterPosts && filterPosts
    this.props.getPosts(valueFilter)
  }

  render() {

    const { title, text, filterPosts } = this.state;


    const allPosts = this.props.allpostsFilter ? this.props.allpostsFilter : this.props.postList;

    return (
      <div>
        <Header
          goToLoginPage={this.props.goToLoginPage}
          filterPosts={filterPosts}
          handleChangeInput={this.handleChangeInput}
          keyPress={this.handleEnter}
          logout
          search
        />
        <Form
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
        </Form>
        <ListPost>
          {this.props.postList.length === 0 ? <CircularProgress /> :
            allPosts.map(data => {
              return (
                <Card
                  key={data.id}
                  avatar={data.username.substr(0, 1)}
                  title={data.title}
                  text={data.text}
                  postDetail={() => this.handlePostDetail(data.id)}
                  handleLikePost={this.handleLikePost}
                  handleDeslikePost={this.handleDeslikePost}
                  id={data.id}
                  votesCount={data.votesCount}
                  userVoteDirection={data.userVoteDirection}
                  name={data.username}
                  url={`http://${window.location.hostname}/${data.id}`}
                />)
            })}
        </ListPost>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    postList: state.postList.posts,
    allpostsFilter: state.postList.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    createNewPost: (title, text) => dispatch(createNewPost(title, text)),
    getPosts: (valueFilter) => dispatch(getPosts(valueFilter)),
    getPostDetails: id => dispatch(getPostDetails(id)),
    likeDeslikePost: (number, id, namePage, filterPosts) => dispatch(likeDeslikePost(number, id, namePage, filterPosts)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)