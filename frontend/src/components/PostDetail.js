import React from 'react'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {
  const { id, title, author, category, voteScore, comments } = props.post
  return (
    <div className="post">
      <h1>{title}</h1>
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

      {comments ? (<h1>Comments</h1>) : null}
      {comments
        && comments.map(comment => (
          <div key={comment.id}>{comment.body} - {comment.author}</div>
      ))}

    </div>
  )
}

export default PostDetail