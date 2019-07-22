import React, { useState } from 'react'
const Blog = ({ blog, addLike }) => {

  const [showExtended, setShowExtended] = useState(false)


  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }


  const blogElement = () => {
    return (
      <div style={blogStyle}>
        <div onClick={() => setShowExtended(!showExtended)}>
          {blog.title} {blog.author}
        </div>
        {showExtended &&
          <div>
            <a href={blog.url}>{blog.url}</a>
            <p>{blog.likes} likes <button onClick={() => addLike(blog.id)}>likes</button></p>
            <p>added by {blog.user.name}</p>
          </div>
        }
      </div>
    )
  }

  return (
    blogElement()
  )
}

export default Blog