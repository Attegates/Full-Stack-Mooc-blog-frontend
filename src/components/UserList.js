import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from './styled/Table'


const UserList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Table.Th>username</Table.Th>
            <Table.Th>blogs created</Table.Th>
          </tr>
          {props.users.map(u =>
            <tr key={u.username}>
              <Table.Td><Link to={`/users/${u.username}`}>{u.username}</Link></Table.Td>
              <Table.Td>{u.blogs.length}</Table.Td>
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
