import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { useField } from './hooks/index'
import { setNotification } from './reducers/notificationReducer'
import { initBlogs, addLike, deleteBlog } from './reducers/blogReducer'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'

const App = (props) => {

  //const [blogs, setBlogs] = useState([])
  const [sortedBlogs, setSortedBlogs] = useState([])
  const [user, setUser] = useState(null)
  const username = useField('text')
  const password = useField('password')
  const blogFormRef = React.createRef()

  /*
  useEffect(() => {
    setSortedBlogs([...blogs].sort((a, b) => b.likes - a.likes))
  }, [blogs])
  */

  const initializeBlogs = props.initBlogs
  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      blogService.setToken(user.token)
      setUser(user)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value, password: password.value
      })


      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      username.resetField()
      password.resetField()
    } catch (exception) {
      console.error(exception)
      props.setNotification({ message: 'wrong credentials', isError: true }, 5)
    }
  }

  const handleLogout = () => {
    // does not really logout the user since the token is just removed but not expired
    setUser(null)
    blogService.setToken(null)
    window.localStorage.removeItem('loggedInUser')
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
      {user === null
        ?
        <div>
          <h2>Log in to application</h2>
          <LoginForm
            handleLogin={handleLogin}
            usernameField={username}
            passwordField={password}
          />
        </div>
        :
        <div>
          <h2>Blogs</h2>
          <p>{user.name} logged in <button onClick={() => handleLogout()}>logout</button></p>
          <h2>create new</h2>
          {addBlogForm()}
          <BlogList />
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogReducer
  }
}

export default connect(mapStateToProps, { setNotification, initBlogs, addLike, deleteBlog })(App)
