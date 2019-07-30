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
import { initBlogs } from './reducers/blogReducer'
import { connect } from 'react-redux'

const App = (props) => {

  //const [blogs, setBlogs] = useState([])
  const [sortedBlogs, setSortedBlogs] = useState([])
  const [user, setUser] = useState(null)
  const username = useField('text')
  const password = useField('password')
  const blogFormRef = React.createRef()


  /*
  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])
  */

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

  const addBlog = async (title, author, url) => {
    /*
    try {
      const blogObject = {
        title: title,
        author: author,
        url: url
      }
      blogFormRef.current.toggleVisibility()
      const returnedBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(returnedBlog))
      props.setNotification({ message: `a new blog ${returnedBlog.title} by ${returnedBlog.author} added`, isError: false }, 5)
    } catch (exception) {
      console.error(exception)
    }
    */
  }

  const addLike = async (id) => {
    /*
    const blog = blogs.find(b => b.id === id)
    const changedBlog = { ...blog, likes: blog.likes + 1 }

    try {
      const returnedBlog = await blogService.update(id, changedBlog)
      setBlogs(blogs.map(b => b.id !== id ? b : returnedBlog))
    } catch (exception) {
      console.error(exception)
    }
    */
  }


  const addBlogForm = () => {
    return (
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <AddBlogForm
          handleAdd={addBlog}
        />
      </Togglable>
    )
  }


  const removeBlog = async (id) => {
    /*
    const blog = blogs.find(b => b.id === id)
    if (window.confirm(`remove blog ${blog.title} by ${blog.author}?`)) {
      try {
        const response = await blogService.deleteBlog(id)
        console.log(response)
        setBlogs(blogs.filter(b => b.id !== id))
      } catch (exception) {
        console.error(exception)
      }
    }
    */
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
          {sortedBlogs.map(blog =>
            <Blog
              key={blog.id}
              blog={blog}
              addLike={addLike}
              handleRemove={removeBlog}
              showRemoveButton={user.username === blog.user.username}
            />
          )}
        </div>}
    </div>
  )
}

export default connect(null, { setNotification, initBlogs })(App)
