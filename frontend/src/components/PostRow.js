import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Format from '../utils/format'
import VoteButtons from './VoteButtons'
import { fetchDeletePost } from '../actions'


class PostRow extends Component {
  handlePostDelete = (event, post) => {
    event.preventDefault()
    const { deletePost } = this.props

    deletePost(post)
  }

  render() {
    const { post } = this.props
    const { id, title, timestamp, author, category, voteScore, commentCount } = post

    return (
      <tr className="post">
        <td><Link to={`/${category}/${id}`}>{title}</Link></td>
        <td>{timestamp && Format.dateFromTimestamp(timestamp)}</td>
        <td>{author}</td>
        <td>{category}</td>
        <td>{voteScore}</td>
        <td>{commentCount}</td>
        <td>
          <VoteButtons post={post} />
        </td>
        <td>
        <a href={`/${post.id}/edit`}
            className="icon icon-edit">&#9998;
          </a>
          <a href=""
            onClick={(event) => this.handlePostDelete(event, post)}
            className="icon icon-delete">x
          </a>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (post) => dispatch(fetchDeletePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostRow)