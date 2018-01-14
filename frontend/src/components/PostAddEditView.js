import React from 'react'
import { connect } from 'react-redux';
import { fetchPost, initPost, setPost, fetchAddPost } from '../actions'

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
    const { post } = this.props

    this.props.addPost(post)
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
              columnMaps.map(columnMap => (
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAddEditView)