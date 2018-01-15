import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//import { fetchAddComment, fetchUpdateComment } from '../actions'

class CommentForm extends React.Component {
  state = {
    comment: {
      postId: null,
      body: '',
      author: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)

  }

  isNew = () => {
    const { comment } = this.props
    return comment && comment.isNew ? true : false
  }

  render() {
    const { comment } = this.props

    return (
      <div className="comment-add-edit-view">
        <h3>Add/Edit</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Body
              <input type="text" name="body" onChange={this.handleChange}></input>
          </label>
          <label>Author
              <input type="text" name="author" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    //addComment: (comment) => dispatch(fetchAddComment(comment)),
    //updateComment: (comment) => dispatch(fetchUpdateComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentForm))