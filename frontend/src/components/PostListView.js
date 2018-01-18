import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PostList from './PostList'
import CategoryList from './CategoryList'
import { setCategory } from '../actions'

class PostListView extends React.Component {
  componentDidMount() {
    const { match, setCategory } = this.props
    const category = match.params.category
    console.log('category', category)
    setCategory(category)
  }

  render() {
    return (
      <div className="post-list-view">
        <h1>
          Posts
          <Link to='/add' className="icon icon-add">+</Link>
        </h1>
        <CategoryList />
        <div className="post-list-view">
          <PostList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    setCategory: (category) => dispatch(setCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListView)