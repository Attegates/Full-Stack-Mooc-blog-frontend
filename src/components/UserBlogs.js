import React from 'react'
import { connect } from 'react-redux'

const UserBlogs = ({ username, ...props }) => {
  const user = props.users.find(u => username === u.username)
  const name = user.name
  const blogs = user.blogs
  console.log(user)
  return (
    <div>
      <h2>{name}</h2>
      <h3>added blogs</h3>
      <ul>
        {blogs.map(b =>
          <li key={b.id}>{b.title}</li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer
  }
}

export default connect(mapStateToProps)(UserBlogs)
