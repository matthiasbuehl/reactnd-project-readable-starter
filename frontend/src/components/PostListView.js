import React from 'react'
import PostList from './PostList'
import CategoryList from './CategoryList'

class PostListView extends React.Component {

  render() {

    return (
      <div className="post-list-view">
        <h1>Posts</h1>
        <CategoryList />
        <div className="post-list-view">
          <PostList />
        </div>
      </div>
    )
  }
}

export default PostListView