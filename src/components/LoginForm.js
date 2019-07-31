import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks/index'
import { setNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/userReducer'

const LoginForm = (props) => {

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      props.login({ username: username.value, password: password.value })
      usernameReset()
      passwordReset()
    } catch (exception) {
      console.error(exception)
      props.setNotification({ message: 'wrong credentials', isError: true }, 5)
    }
  }

  const { resetField: usernameReset, ...username } = useField('text')
  const { resetField: passwordReset, ...password } = useField('password')

  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <div>
        username
        <input
          {...username}
          name="Username"
        />
      </div>
      <div>
        password
        <input
          {...password}
          name="Password"
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default connect(null, { login, setNotification })(LoginForm)
