import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getPostDetails } from '../../actions';
import { likeDeslikePost, likeDeslikeComment } from '../../actions/handleLike'
import { createNewComment } from '../../actions/createPostAndComment'
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Card from '../../components/Card';
import Comment from '../../components/Comment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const ListPost = styled.div`
  width: 45vw;
  margin: auto;
  form  {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    }
;`

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
    if(token === null){
      this.props.goToHome()
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
      <ListPost>
          <div>
            <Card
              title={title}
              text={text}
              handleLikeDeslikePost={this.handleLikeDeslikePost }
              id={id}
              userVoteDirection={userVoteDirection}
              votesCount={votesCount}
              avatar={username && username.substr(0, 1)}
              name = {username}
              showCommentIcon = {false}
            />
            <form onSubmit={(e) => { e.preventDefault(); this.submitComment(id) }}>
              <Input
                name="comment"
                type="text"
                multiline={true}
                value={this.state.comment}
                onChange={this.handleChangeInput}
                placeholder="Digite um comentário"
                required
              />
              <Button type="submit">Publicar</Button>
            </form>
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
          </div>
        }
      </ListPost>
    )
  }
}

const mapStateToProps = state => ({
  postDetail: state.postList.postDetail
})

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push(routes.loginPage)),
    goToUserPage: () => dispatch(push(routes.userPage)),
    createNewComment: (comment, id) => dispatch(createNewComment(comment, id)),
    getPostDetails: id => dispatch(getPostDetails(id)),
    likeDeslikePost: (number, id) => dispatch(likeDeslikePost(number, id)),
    likeDeslikeComment: (number, id, idPost) => dispatch(likeDeslikeComment(number, id, idPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);