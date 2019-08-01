import React from 'react'
import { connect } from 'react-redux'
import { addLike, deleteBlog } from '../reducers/blogReducer'

const Blog = ( props ) => {

  if (props.user === undefined || props.blog === undefined) {
    return null
  }

  const blog = props.blog
  const showRemove = { display: props.user.username === blog.user.username ? '' : 'none' }


  return (
    <div>
      <a href={blog.url}>{blog.url}</a>
      <p>{blog.likes} likes <button onClick={() => props.addLike(blog)}>likes</button></p>
      <p>added by {blog.user.name}</p>
      <button style={showRemove} onClick={() => props.deleteBlog(blog.id)}>remove</button>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogReducer.find(b => b.id === ownProps.id),
    user: state.userReducer
  }
}

const mapToDispatch = {
  addLike,
  deleteBlog,
}

export default connect(mapStateToProps, mapToDispatch)(Blog)
