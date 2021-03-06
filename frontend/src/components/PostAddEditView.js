import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  fetchPost,
  initPost,
  setPost,
  fetchAddPost,
  fetchUpdatePost
} from '../actions'

class PostAddEditView extends React.Component {
  state = {}

  componentDidMount() {
    const id = this.props.match.params.post_id
    let mode = null
    if (id) {
      this.props.getPost(id)
      mode = 'edit'
    }
    else {
      this.props.initPost()
      mode = 'add'
    }

    this.setState({
      mode: mode
    })
  }

  handleChange = (event, field) => {
    event.preventDefault()
    const { post } = this.props

    this.props.setPost({
      ...post,
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { post, addPost, updatePost, history } = this.props

    const fn = this.isNew() ? addPost : updatePost
    fn(post)
    history.push('/')
  }

  isNew = () => {
    const { post } = this.props
    return post && post.isNew ? true : false
  }

  render() {
    const { post, columnMaps } = this.props

    return post
      ? (
        <div className="post-add-edit-view">
          <h1>Add/Edit</h1>
          <form onSubmit={this.handleSubmit}>
            <input readOnly={true} type="hidden" value={post.id} />
            {
              columnMaps
                .filter(col => !['timestamp', 'voteScore', 'commentCount'].includes(col.field) )
                .map(columnMap => (
                <label key={columnMap.field}>
                  {columnMap.display}
                  <input type="text"
                    name={columnMap.field}
                    value={post[columnMap.field]}
                    onChange={(event) => this.handleChange(event, columnMap.field)}
                  />
                </label>
              ))}
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
      : null
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    initPost: () => dispatch(initPost()),
    setPost: (post) => dispatch(setPost(post)),
    addPost: (post) => dispatch(fetchAddPost(post)),
    updatePost: (post) => dispatch(fetchUpdatePost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostAddEditView))