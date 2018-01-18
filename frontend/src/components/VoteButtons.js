import React from 'react'
import { connect } from 'react-redux';
import { fetchUpdatePost } from '../actions'

class VoteButtons extends React.Component {

  handleVote = (changeBy) => {
    let { post, updatePost } = this.props
    post.voteScore = parseInt(post.voteScore, 10) + parseInt(changeBy, 10)
    updatePost(post)
  }

  render() {
    const { post } = this.props

    return (
      <div className="vote-buttons">
        <button onClick={() => this.handleVote(-1)}>-</button>
        <button onClick={() => this.handleVote(1)}>+</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    updatePost: (post) => dispatch(fetchUpdatePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButtons)