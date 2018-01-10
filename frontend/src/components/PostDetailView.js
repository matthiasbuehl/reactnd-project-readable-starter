import React from 'react'
import { connect } from 'react-redux';
import PostDetail from './PostDetail'
import { fetchPost, fetchPostComments } from '../actions'

class PostDetailView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.post_id
    this.props.getPost(id)
      .then(this.props.getPostComments(id))
  }

  render() {
    console.log('props:', this.props)
    const { post } = this.props
    return post
      ? (
        <div className="post-detail-view">
          <PostDetail post={post} />
        </div>
      )
      : null
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    getPostComments: (id) => dispatch(fetchPostComments(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailView)