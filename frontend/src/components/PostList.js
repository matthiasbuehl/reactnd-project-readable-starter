import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import Post from './Post'

class PostList extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getPosts()
      .then(posts => {
        //console.log(posts)
      })
  }

  render() {
    const { posts } = this.props
    return (
      <div className="post-list">
      {posts.map(post => (
        <div key={post.id}><Post /></div>
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
    getPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)