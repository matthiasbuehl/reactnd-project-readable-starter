import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts, setSortBy } from '../actions'
import PostRow from './PostRow'

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  handleHeaderClick = (event, clickedColumn) => {
    event.preventDefault()
    const { sortBy } = this.props

    let newSortBy = {}
    if (sortBy.column === clickedColumn) {
      newSortBy = {
        ...sortBy,
        order: sortBy.order === 'asc' ? 'desc' : 'asc'
      }
    }
    else {
      newSortBy = { column: clickedColumn, order: 'asc' }
    }

    this.props.setSortBy(newSortBy)
  }

  render() {
    const { posts, category, sortBy, columnMaps } = this.props

    return posts && posts.length
      ? (
        <table className="posts-table">
          <thead>
            <tr>
              {
                columnMaps
                  .filter(col => col.field !== 'body')
                  .map(columnMap => (
                    <th key={columnMap.field}>
                      <a
                        href="" onClick={(event) => this.handleHeaderClick(event, columnMap.field)}
                      >
                        {columnMap.display}
                      </a>
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody>
            {posts
              .filter(post => (post.category === category) || !category)
              .sort((a, b) => {
                if (sortBy.order === 'asc') {
                  if (a[sortBy['column']] > b[sortBy['column']]) return 1
                  if (a[sortBy['column']] < b[sortBy['column']]) return -1
                  if (a[sortBy['column']] === b[sortBy['column']]) return 0
                }
                else {
                  if (a[sortBy['column']] > b[sortBy['column']]) return -1
                  if (a[sortBy['column']] < b[sortBy['column']]) return 1
                  if (a[sortBy['column']] === b[sortBy['column']]) return 0
                }
                return 0
              })
              .map(post => (
                <PostRow key={post.id} post={post} />
              ))
            }
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
    getPosts: () => dispatch(fetchPosts()),
    setSortBy: (column) => dispatch(setSortBy(column))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)