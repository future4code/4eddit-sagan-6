import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { createNewComment, getPostDetails } from '../../actions';
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
  }

  render() {

    const { username, text, title, comments, id } = this.props.postDetail === undefined ? false : this.props.postDetail;

    return (
      <ListPost>
        {this.props.postDetail === undefined ? "Carregando..." :
          <div>
            <Card
              avatar={username.substr(0, 1)}
              title={title}
              text={text}
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
            {comments.map(data => {
              return (
                <Comment
                  key={data.id}
                  title={data.username}
                  text={data.text}
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
    getPostDetails: id => dispatch(getPostDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);