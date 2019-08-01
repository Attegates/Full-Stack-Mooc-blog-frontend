import React from 'react'
import { connect } from 'react-redux'

const UserBlogs = (props) => {

  // return null until users are loaded or if user is not found.
  if (props.user === undefined) {
    return null
  }

  const { name, blogs } = props.user

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

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.usersReducer.find(u => ownProps.username === u.username)
  }
}

export default connect(mapStateToProps)(UserBlogs)
