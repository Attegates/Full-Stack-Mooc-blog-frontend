import React from 'react'

const LoginForm = ({ handleLogin, usernameField, passwordField }) => {
  return (
    <form className="loginForm" onSubmit={handleLogin}>
      <div>
        username
        <input
          type={usernameField.type}
          value={usernameField.value}
          onChange={usernameField.onChange}
          name="Username"
        />
      </div>
      <div>
        password
        <input
          type={passwordField.type}
          value={passwordField.value}
          onChange={passwordField.onChange}
          name="Password"
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm