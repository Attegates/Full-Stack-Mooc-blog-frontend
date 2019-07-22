import React, { useState, useEffect } from 'react';
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState(null)
  const blogFormRef = React.createRef()

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [user])

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
        username, password
      })

      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error(exception)
      setNotification({ message: 'wrong credentials', isError: true })
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    // does not really logout the user since the token is just removed but not expired
    setUser(null)
    blogService.setToken(null)
    window.localStorage.removeItem('loggedInUser')
  }

  const addBlog = async (title, author, url) => {
    try {
      const blogObject = {
        title: title,
        author: author,
        url: url
      }
      blogFormRef.current.toggleVisibility()
      const returnedBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(returnedBlog))
      setNotification({ message: `a new blog ${returnedBlog.title} by ${returnedBlog.author} added`, isError: false })
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    } catch (exception) {
      console.error(exception)
    }
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

  return (
    <div>
      <Notification
        message={notification}
      />
      {user === null
        ?
        <div>
          <h2>Log in to application</h2>
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </div>
        :
        <div>
          <h2>Blogs</h2>
          <p>{user.name} logged in <button onClick={() => handleLogout()}>logout</button></p>
          <h2>create new</h2>
          {addBlogForm()}
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}

        </div>}
    </div>
  )
}

export default App;
