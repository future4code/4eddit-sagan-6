import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getPostDetails } from '../../actions';
import { likeDeslikePost, likeDeslikeComment } from '../../actions/handleLike'
import { createNewComment } from '../../actions/createPostAndComment'
import Input from '@material-ui/core/Input';
import Card from '../../components/Card';
import Comment from '../../components/Comment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ListPost, Form } from '../../style/styles';
import Header from '../../components/Header';

class PostDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ""
    }
  }

  componentDidMount() {
    const id = window.localStorage.getItem('id')
    const token = window.localStorage.getItem('token')
    this.props.getPostDetails(id)
    if (token === null) {
      this.props.goToLoginPage()
    }

  }

  handleChangeInput = event => {
    this.setState({
      comment: event.target.value
    })
  }

  submitComment = (id) => {
    this.props.createNewComment(this.state.comment, id)
    this.setState({
      comment: ''
    })
  }

  handleLikeDeslikePost = (number, id) => {
    this.props.likeDeslikePost(number, id)
  }

  handleLikeDeslikeComment = (number, id) => {
    this.props.likeDeslikeComment(number, id)
  }

  render() {
    const { username, text, title, comments, id,
      userVoteDirection, votesCount } = this.props.postDetail
    return (
      <div>
        <Header goToLoginPage={this.props.goToLoginPage} />
        <ListPost>
          <Card
            title={title}
            text={text}
            handleLikeDeslikePost={this.handleLikeDeslikePost}
            id={id}
            userVoteDirection={userVoteDirection}
            votesCount={votesCount}
            avatar={username && username.substr(0, 1)}
            name={username}
            showCommentIcon={false}
            url={window.location.href}
          />
          <Form onSubmit={(e) => { e.preventDefault(); this.submitComment(id) }}>
            <Input
              name="comment"
              type="text"
              multiline={true}
              value={this.state.comment}
              onChange={this.handleChangeInput}
              placeholder="Digite um comentário"
              required
            />
            <Button type="submit" color = 'primary'>Publicar</Button>
          </Form>
          <Button color="secondary" onClick={this.props.goToUserPage}><ArrowBackIcon/>Voltar</Button>
        </ListPost>
        <ListPost>
          <h2>
            Comentários
          </h2>
          {comments === undefined ? <CircularProgress /> : comments.map(data => {
            return (
              <Comment
                key={data.id}
                title={data.username}
                text={data.text}
                handleLikeDeslikeComment={this.handleLikeDeslikeComment}
                id={data.id}
                userVoteDirection={data.userVoteDirection}
                votesCount={data.votesCount}
              />
            )
          })}
        </ListPost>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postDetail: state.postList.postDetail
})

const mapDispatchToProps = dispatch => {
  return {
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToUserPage: () => dispatch(push(routes.userPage)),
    createNewComment: (comment, id) => dispatch(createNewComment(comment, id)),
    getPostDetails: id => dispatch(getPostDetails(id)),
    likeDeslikePost: (number, id) => dispatch(likeDeslikePost(number, id)),
    likeDeslikeComment: (number, id, idPost) => dispatch(likeDeslikeComment(number, id, idPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);