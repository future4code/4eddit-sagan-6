import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { createNewComment, getPostDetails, likeDeslike, likeDeslikeComment } from '../../actions';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Card from '../../components/Card';
import Comment from '../../components/Comment';
import Button from '@material-ui/core/Button';

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
    this.props.getPostDetails(id)
  }


  handleChangeInput = event => {
    this.setState({
      comment: event.target.value
    })
  }

  submitComment = (id) => {
    this.props.createNewComment(this.state.comment, id)
    this.setState({
      comment : ''
    })
  }

  handleLikeDeslike = (number, id) => {
    this.props.likeDeslike(number, id)
  }

  handleLikeDeslikeComment = (number, id) => {
    console.log(number, id)
    this.props.likeDeslikeComment(number, id)
  }

  render() {
    console.log(this.props.postDetail)
    const { username, text, title, comments, id, userVoteDirection, votesCount } = this.props.postDetail === undefined ? false : this.props.postDetail;

    return (
      <ListPost>
        {this.props.postDetail === undefined ? "Carregando..." :
          <div>
            <Card
              title={title}
              text={text}
              handleLikeDeslike={this.handleLikeDeslike}
              id={id}
              userVoteDirection={userVoteDirection}
              votesCount={votesCount}
              avatar={username && username.substr(0, 1)}
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
            {comments === undefined ? 'carregando' : comments.map(data => {
              return (
                <Comment
                  key={data.id}
                  title={data.username}
                  text={data.text}
                  handleLikeDeslikeComment={this.handleLikeDeslikeComment}
                  id={data.id}
                  userVoteDirection={data.userVoteDirection}
                  votesCount = {data.votesCount}

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
    likeDeslike: (number, id) => dispatch(likeDeslike(number, id)),
    likeDeslikeComment: (number, id,idPost) => dispatch(likeDeslikeComment(number, id,idPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);