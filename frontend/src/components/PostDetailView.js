import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostDetail from './PostDetail'
import { fetchPost, fetchPostComments } from '../actions'

class PostDetailView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.post_id
    this.props.getPost(id)
      .then(() => this.props.getPostComments(id))
  }

  render() {
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
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    getPostComments: (id) => dispatch(fetchPostComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetailView))