import React from 'react'
import { Link } from 'react-router-dom'
import * as Format from '../utils/format'

const PostDetail = (props) => {
  const { id, title, timestamp, author, category, voteScore, comments } = props.post
  return (
    <div className="post">
      <h1>
        {title}
        <Link to={`/${id}/edit`} className="icon icon-edit">&#9998;</Link>
      </h1>
      <div>
        <span>Author:</span>
        <span>{author}</span>
      </div>
      <div>
        <span>Date:</span>
        <span>{Format.dateFromTimestamp(timestamp)}</span>
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