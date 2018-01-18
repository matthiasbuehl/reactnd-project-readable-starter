import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDeletePost, fetchDeleteComment } from '../actions'
import PostRow from './PostRow'
import CommentForm from './CommentForm';

class PostDetail extends Component {
  state = {
    showAddCommentForm: false,
    editCommentId: null
  }

  handleDelete = (event) => {
    event.preventDefault()
    const { post, deletePost, history } = this.props

    deletePost(post)
    history.push('/')
  }

  toggleAddCommentForm = (event) => {
    if (event) event.preventDefault()
    this.setState({
      showAddCommentForm: !this.state.showAddCommentForm
    })
  }

  toggleEditCommentForm = (event, comment) => {
    console.log(comment.id, this.state.editCommentId)
    if (event) event.preventDefault()
    this.setState({
      editCommentId: this.state.editCommentId === comment.id
        ? null
        : comment.id
    })
  }

  showEditCommentForm = (comment) => comment.id === this.state.editCommentId

  closeEditForm = () => this.setState({editCommentId: null})

  handleCommentDelete = (event, comment) => {
    event.preventDefault()
    const { deleteComment } = this.props
    deleteComment(comment)
  }

  render() {
    const { showAddCommentForm } = this.state
    const { post, columnMaps } = this.props
    const { id, body, comments } = post

    return (
      <div className="post">
        <h1>
          {post.title}
          <Link to={`/${id}/edit`} className="icon icon-edit">&#9998;</Link>
          <a href="" onClick={this.handleDelete} className="icon icon-delete">X</a>
        </h1>

        {post
          ? (
            <table className="posts-table">
              <thead>
                <tr>
                  {
                    columnMaps
                      .filter(col => col.field !== 'body')
                      .map(columnMap => (
                        <th key={columnMap.field}>
                          {columnMap.display}
                        </th>
                      ))
                  }
                </tr>
              </thead>
              <tbody>
                <PostRow key={post.id} post={post} />
              </tbody>
            </table>
          )
          : null
        }

        <div className="body-detail">
          {body}
        </div>

        {comments
          ? (
            <h1>
              Comments
                <a href=""
                onClick={this.toggleAddCommentForm}
                className="icon icon-add">+
                </a>
            </h1>
          )
          : null
        }

        {showAddCommentForm
          ? <CommentForm post={post} toggleAddCommentForm={this.toggleAddCommentForm} />
          : null
        }

        {comments
          && comments.map(comment => (
            <div key={comment.id}>
              {comment.body} - {comment.author}
              <a href=""
                onClick={(event) => this.handleCommentDelete(event, comment)}
                className="icon icon-delete">x
              </a>
              <a href=""
                onClick={(event) => this.toggleEditCommentForm(event, comment)}
                className="icon icon-edit">&#9998;
              </a>
              {this.showEditCommentForm(comment)
              ? <CommentForm post={post} comment={comment} closeEditForm={this.closeEditForm} />
              : null
              }
            </div>
          ))}

      </div>
    )
  }
}


function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (post) => dispatch(fetchDeletePost(post)),
    deleteComment: (comment) => dispatch(fetchDeleteComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail))
