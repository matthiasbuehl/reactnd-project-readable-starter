import React from 'react'
import { Link } from 'react-router-dom'

const PostRow = (props) => {
  const { id, title, author, category, voteScore } = props.post
  return (
    <tr className="post">
      <td><Link to={`/${id}`}>{title}</Link></td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{voteScore}</td>
    </tr>
  )
}

export default PostRow