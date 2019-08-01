import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import styled from 'styled-components'

const MenuBar = styled.div`
  padding: 1em;
  border: 2px solid Pink;
  position: relative;
`

const Menu = ({ name }) => {
  const padding = {
    paddingRight: 5
  }
  return (
    <MenuBar>
      <Link style={padding} to="/">Blogs</Link>
      <Link style={padding} to="/users">users</Link>
      <span>{name} logged in </span>
      <LogoutButton />
    </MenuBar>
  )
}

export default Menu
