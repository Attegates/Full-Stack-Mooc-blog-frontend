import React, { useState } from 'react'

const Blog = ({ blog, handleRemoveClick, handleLikeClick, showRemoveButton }) => {

  const [showExtended, setShowExtended] = useState(false)
  const showRemove = { display: showRemoveButton ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div className="blog" style={blogStyle}>
      <div className="basicContent" onClick={() => setShowExtended(!showExtended)}>
        {blog.title} {blog.author}
      </div>
      {showExtended &&
        <div className="extendedContent">
          <a href={blog.url}>{blog.url}</a>
          <p>{blog.likes} likes <button onClick={() => handleLikeClick(blog)}>likes</button></p>
          <p>added by {blog.user.name}</p>
          <button style={showRemove} onClick={() => handleRemoveClick(blog.id)}>remove</button>
        </div>
      }
    </div>
  )
}

export default Blog
