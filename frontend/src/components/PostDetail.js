import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as Format from '../utils/format'
import { fetchDeletePost } from '../actions'
import PostRow from './PostRow'
import CommentForm from './CommentForm';

class PostDetail extends Component {
  state = {
    showCommentForm: false
  }

  handleDelete = (event) => {
    event.preventDefault()
    const { post, deletePost, history } = this.props

    deletePost(post)
    history.push('/')
  }

  handleAddComment = (event) => {
    event.preventDefault()
    this.setState({
      showCommentForm: !this.state.showCommentForm
    })
  }

  render() {
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
                      .filter(col => col.field != 'body')
                      .map(columnMap => (
                        <th key={columnMap.field}>
                          {columnMap.display}
                        </th>
                      ))}
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
                Comments<a href="" onClick={this.handleAddComment} className="icon icon-add">+</a>
              </h1>
            )
          : null
        }

        {this.state.showCommentForm
        ? <CommentForm post={post}/>
        : null
        }

        {comments
          && comments.map(comment => (
            <div key={comment.id}>{comment.body} - {comment.author}</div>
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
    deletePost: (id) => dispatch(fetchDeletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail))
