import React from 'react'
import { connect } from 'react-redux';
import { setCategory } from '../actions'

class CategoryList extends React.Component {
  handleClick = (e) => {
    const { category } = this.props
    e.preventDefault()

    let selectedCategory = e.target.value
    selectedCategory = selectedCategory === category ? null : selectedCategory
    this.props.setCategory(selectedCategory)
  }

  render() {
    const { categories, category } = this.props
    return (
      categories
        ? (<div className="category-list">
         <span>Categories:</span>
          {categories.map(cat => (
            <button
              key={cat.name}
              value={cat.name}
              onClick={this.handleClick}
              className={cat.name === category ? 'category-active' : 'category'}>
              {cat.name}
            </button>
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