import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setCategory } from '../actions'

class CategoryList extends React.Component {
  handleClick = (event, category) => {
    const prevCategory = this.props.category
    let selectedCategory = category

    selectedCategory = selectedCategory === prevCategory ? null : selectedCategory
    this.props.setCategory(selectedCategory)
  }

  render() {
    const { categories, category } = this.props
    return (
      categories
        ? (<div className="category-list">
         <span>Categories: </span>
          {categories.map(cat => (
            <Link
              key={cat.name}
              onClick={(event) => this.handleClick(event, cat.name)}
              to={`/${cat.path}`}
              className={cat.name === category ? 'category-active' : 'category'}>
              {cat.name}
            </Link>
          ))}
        </div>)
        : null
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)