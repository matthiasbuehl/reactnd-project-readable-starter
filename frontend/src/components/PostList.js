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
    console.log('state', this.state)
    console.log('props', this.props)
    return (
      <div className="post-list">
        <Post />
        <Post />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state} 
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