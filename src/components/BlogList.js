import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import { addLike, deleteBlog } from '../reducers/blogReducer'

const BlogList = (props) => {
  return (
    props.blogs.map(blog =>
      <Blog
        key={blog.id}
        blog={blog}
        handleLikeClick={props.addLike}
        handleRemoveClick={props.deleteBlog}
        showRemoveButton={blog.user.username === props.user.username}
      />
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
