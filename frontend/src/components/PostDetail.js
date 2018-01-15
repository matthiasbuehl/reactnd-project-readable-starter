import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as Format from '../utils/format'
import { fetchDeletePost } from '../actions'

class PostDetail extends Component {
  handleDelete = (event) => {
    event.preventDefault()
    const { post, deletePost, history} = this.props

    deletePost(post)
    history.push('/')
  }

  render() {
  const { id, title, timestamp, author, category, voteScore, comments } = this.props.post

  return (
    <div className="post">
      <h1>
        {title}
        <Link to={`/${id}/edit`} className="icon icon-edit">&#9998;</Link>
        <a href="" onClick={this.handleDelete} className="icon icon-delete">X</a>
      </h1>
      <div>
        <span>Author:</span>
        <span>{author}</span>
      </div>
      <div>
        <span>Date:</span>
        <span>{Format.dateFromTimestamp(timestamp)}</span>
      </div>
      <div>
        <span>Category:</span>
        <span>{category}</span>
      </div>
      <div>
        <span>Vote Score:</span>
        <span>{voteScore}</span>
      </div>

      {comments ? (<h1>Comments</h1>) : null}
      {comments
        && comments.map(comment => (
          <div key={comment.id}>{comment.body} - {comment.author}</div>
      ))}

    </div>
  )}
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
