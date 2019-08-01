import React from 'react'
import { connect } from 'react-redux'
import { addLike, deleteBlog } from '../reducers/blogReducer'
import { Link } from 'react-router-dom'

const BlogList = (props) => {

  const listStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    props.blogs.map(blog =>
      <div key={blog.id} style={listStyle}>
        <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author} </Link>
      </div>
    )
  )
}

const sortByLikes = (list) => {
  list.sort((a, b) => b.likes - a.likes)
  return list
}

const mapStateToProps = (state) => {
  return {
    blogs: sortByLikes([...state.blogReducer]),
    user: state.userReducer
  }
}

const mapToDispatch = {
  addLike,
  deleteBlog,
}

export default connect(mapStateToProps, mapToDispatch)(BlogList)
