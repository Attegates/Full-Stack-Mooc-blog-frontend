import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BlogList = (props) => {

  const ListDiv = styled.div`
    padding-top: 10px;
    padding-left: 2px;
    border: solid;
    border-width: 1px;
    margin-bottom: 10px;
  `

  return (
    props.blogs.map(blog =>
      <ListDiv key={blog.id} >
        <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author} </Link>
      </ListDiv>
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


export default connect(mapStateToProps)(BlogList)
