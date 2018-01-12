import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import PostRow from './PostRow'

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, category } = this.props
    return posts && posts.length
      ? (<table className="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Vote Count</th>
          </tr>
        </thead>
        <tbody>
          {posts.filter(post => (post.category === category) || !category)
            .map(post => (
              <PostRow key={post.id} post={post} />
            ))}
        </tbody>
      </table>
      )
      : null
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