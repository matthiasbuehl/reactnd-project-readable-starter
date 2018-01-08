import React from 'react'
import { connect } from 'react-redux';
import Post from './Post'
import { fetchPost } from '../actions'

class PostDetailView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.post_id
    this.props.getPost(id)
  }

  render() {
    console.log('props:', this.props)
    const { post } = this.props
    return post
      ? (
        <div className="post-detail-view">
          <Post post={post} />
        </div>
      )
      : (<div>No post id</div>)
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailView)