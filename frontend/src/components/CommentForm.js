import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAddComment, fetchUpdateComment } from '../actions'
import { uuid } from '../utils/PostsApi'

const defaultComment = {
  body: '',
  author: '',
  isNew: true
}

class CommentForm extends React.Component {

  componentWillMount() {
    const { comment, post} = this.props

    this.setState({
      comment: comment
        ? comment
        : {
          ...defaultComment,
          parentId: post.id
        }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiving props', nextProps, this.props)
    this.setState({ show: nextProps.show })
  }

  handleChange = (event, field) => {
    event.persist()
    event.preventDefault()
    const { comment } = this.state

    this.setState(() => ({
      comment: {
        ...comment,
        [event.target.name]: event.target.value
      }
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { addComment, updateComment, history } = this.props
    const comment = this.props.comment || this.state.comment

    this.isNew() ? addComment({ ...comment, id: uuid() } ) : updateComment(comment)
    //this.setState({show: false})
    this.setState({comment: defaultComment})
    // TODO: figure out how to hide for after submit
  }

  isNew = () => {
    const { comment } = this.state
    return comment && comment.isNew ? true : false
  }

  render() {
    const { comment, show } = this.state

    return (
      show
        ? <div className="comment-add-edit-view">
          <h3>Add/Edit</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Body
                <input type="text" name="body" value={comment.body} onChange={this.handleChange}></input>
            </label>
            <label>Author
                <input type="text" name="author" value={comment.author} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        : null
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(fetchAddComment(comment)),
    updateComment: (comment) => dispatch(fetchUpdateComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentForm))