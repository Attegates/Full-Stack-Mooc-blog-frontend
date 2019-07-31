import React from 'react'
import { connect } from 'react-redux'

const UserList = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {props.users.map(u =>
          <tr key={u.username}>
            <td>{u.username}</td>
            <td>{u.blogs.length}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer
  }
}

export default connect(mapStateToProps)(UserList)
