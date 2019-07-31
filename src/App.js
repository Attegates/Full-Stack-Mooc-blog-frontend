import React, { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import LogoutButton from './components/LogoutButton'
import Togglable from './components/Togglable'
import { initBlogs } from './reducers/blogReducer'
import { setUserFromStorage } from './reducers/userReducer'
import { initUsers } from './reducers/usersReducer'
import UserList from './components/UserList'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'

const App = (props) => {
  const initializeBlogs = props.initBlogs
  const trySetUserOnLoad = props.setUserFromStorage
  const initializeUsers = props.initUsers

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])
  useEffect(() => {
    trySetUserOnLoad()
  }, [trySetUserOnLoad])
  useEffect(() => {
    initializeUsers()
  }, [initializeUsers])


  const addBlogForm = () => {
    return (
      <Togglable buttonLabel="new blog">
        <AddBlogForm />
      </Togglable>
    )
  }

  return (
    <div>
      <Notification />
      {props.user === null
        ?
        <div>
          <h2>Log in to application</h2>
          <LoginForm />
        </div>
        :
        <div>
          <h2>Blogs</h2>
          <p>{props.user.name} logged in <LogoutButton /></p>
          <h2>create new</h2>
          {addBlogForm()}
          <BlogList />
          <UserList />
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, { setUserFromStorage, initBlogs, initUsers })(App)
