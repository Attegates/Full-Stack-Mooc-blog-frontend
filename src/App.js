import React, { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initBlogs } from './reducers/blogReducer'
import { setUserFromStorage, nullifyUser } from './reducers/userReducer'

import { connect } from 'react-redux'
import BlogList from './components/BlogList'

const App = (props) => {

  const blogFormRef = React.createRef()

  const initializeBlogs = props.initBlogs
  const trySetUserOnLoad = props.setUserFromStorage

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])
  useEffect(() => {
    trySetUserOnLoad()
  }, [trySetUserOnLoad])

  const handleLogout = () => {
    props.nullifyUser()
  }


  const addBlogForm = () => {
    return (
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
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
          <p>{props.user.name} logged in <button onClick={() => handleLogout()}>logout</button></p>
          <h2>create new</h2>
          {addBlogForm()}
          <BlogList />
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, { nullifyUser, setUserFromStorage, initBlogs })(App)
