import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const UserList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
          {props.users.map(u =>
            <tr key={u.username}>
              <td><Link to={`/users/${u.username}`}>{u.username}</Link></td>
              <td>{u.blogs.length}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer
  }
}

export default connect(mapStateToProps)(UserList)
