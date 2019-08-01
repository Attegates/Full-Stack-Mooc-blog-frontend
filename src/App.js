import React, { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Menu from './components/Menu'
import Togglable from './components/Togglable'
import { initBlogs } from './reducers/blogReducer'
import { setUserFromStorage } from './reducers/userReducer'
import { initUsers } from './reducers/usersReducer'
import UserList from './components/UserList'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'
import UserBlogs from './components/UserBlogs'
import Blog from './components/Blog'
import { initComments } from './reducers/commentReducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = (props) => {
  const initializeBlogs = props.initBlogs
  const trySetUserOnLoad = props.setUserFromStorage
  const initializeUsers = props.initUsers
  const initializeComments = props.initComments

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])
  useEffect(() => {
    trySetUserOnLoad()
  }, [trySetUserOnLoad])
  useEffect(() => {
    initializeUsers()
  }, [initializeUsers])
  useEffect(() => {
    initializeComments()
  }, [initializeComments])


  const addBlogForm = () => {
    return (
      <div>
        <h2>create new</h2>
        <Togglable buttonLabel="new blog">
          <AddBlogForm />
        </Togglable>
      </div>
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
          <Router>
            <Menu name={props.user.name} />
            <Route exact path="/" render={() =>
              <div>
                {addBlogForm()}
                <BlogList />
              </div>
            }></Route>
            <Route exact path="/users" render={() => <UserList />} ></Route>
            <Route
              exact path="/users/:username"
              render={({ match }) =>
                <UserBlogs username={match.params.username} />}>
            </Route>
            <Route
              path="/blogs/:id"
              render={({ match }) =>
                <Blog id={match.params.id} />
              }>
            </Route>
          </Router>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, { setUserFromStorage, initBlogs, initUsers, initComments })(App)
