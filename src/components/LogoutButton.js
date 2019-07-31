import React from 'react'
import { connect } from 'react-redux'
import { nullifyUser } from '../reducers/userReducer'

const LogoutButton = (props) => {
  const handleLogout = () => {
    props.nullifyUser()
  }

  return (
    <button onClick={handleLogout}>logout</button>
  )
}

export default connect(null, { nullifyUser })(LogoutButton)
