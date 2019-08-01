import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const Menu = ({ name }) => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to="/">Blogs</Link>
      <Link style={padding} to="/users">users</Link>
      <span>{name} logged in <LogoutButton /></span>
    </div>
  )
}

export default Menu
