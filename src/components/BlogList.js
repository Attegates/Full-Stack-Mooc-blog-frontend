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
      />
    )
  )
}

const sortByLikes = (list) => {
  list.sort((a, b) => b.likes - a.likes)
  return list
}

const mapToStateToProps = (state) => {
  return {
    blogs: sortByLikes([...state.blogReducer])
  }
}


const mapToDispatch = {
  addLike,
  deleteBlog,
}

export default connect(mapToStateToProps, mapToDispatch)(BlogList)
