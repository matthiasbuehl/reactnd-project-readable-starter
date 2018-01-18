import React from 'react'
import { Link } from 'react-router-dom'
import * as Format from '../utils/format'

const PostRow = (props) => {
  const { id, title, timestamp, author, category, voteScore, commentCount } = props.post
  return (
    <tr className="post">
      <td><Link to={`/${id}`}>{title}</Link></td>
      <td>{timestamp && Format.dateFromTimestamp(timestamp)}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{voteScore}</td>
      <td>{commentCount}</td>
    </tr>
  )
}

export default PostRow