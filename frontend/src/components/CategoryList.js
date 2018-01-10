import React from 'react'
import { connect } from 'react-redux';
import { setCategory } from '../actions'

class CategoryList extends React.Component {
  handleClick = (e) => {
    this.props.setCategory(e.target.value);
  }

  render() {
    const { categories } = this.props
    return (
      categories
        ? (<div className="category-list">
          {categories.map(category => (
            <button
              key={category.name}
              value={category.name}
              onClick={this.handleClick}
              className="category">
              {category.name}
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