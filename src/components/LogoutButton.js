import React from 'react'
import { connect } from 'react-redux'
import { nullifyUser } from '../reducers/userReducer'
import Button from './styled/Button'

const LogoutButton = (props) => {
  const handleLogout = () => {
    props.nullifyUser()
  }

  const position = {
    position: 'absolute',
    right: '2%',
    top: '25%'
  }

  return (
    <div style={position}>
      <Button primary onClick={handleLogout}>logout</Button>
    </div>
  )
}

export default connect(null, { nullifyUser })(LogoutButton)
