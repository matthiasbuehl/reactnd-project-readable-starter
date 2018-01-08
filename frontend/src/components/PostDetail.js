import React from 'react'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {
  const { id, title, author, category, voteScore } = props.post
  return (
    <div className="post">
      <div>
        <span>Title:</span>
        <span>{title}</span>
      </div>
      <div>
        <span>Author:</span>
        <span>{author}</span>
      </div>
      <div>
        <span>Category:</span>
        <span>{category}</span>
      </div>
      <div>
        <span>Vote Score:</span>
        <span>{voteScore}</span>
      </div>
    </div>
  )
}

export default PostDetail