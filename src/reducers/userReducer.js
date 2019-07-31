import loginService from '../services/login'
import blogService from '../services/blogs'


const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      blogService.setToken(action.data.token)
      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(action.data)
      )
      return action.data
    case 'NULLIFY_USER':
      blogService.setToken(action.data)
      window.localStorage.removeItem('loggedInUser')
      return action.data
    case 'FROM_STORAGE':
      if (action.data !== null) {
        blogService.setToken(action.data.token)
        return action.data
      }
      return state
    default:
      return state
  }
}

const login = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials)
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

const setUserFromStorage = () => {
  return (dispatch) => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    const user = JSON.parse(loggedInUserJSON)
    dispatch({
      type: 'FROM_STORAGE',
      data: user,
    })
  }
}

const nullifyUser = () => {
  return (dispatch) => {
    dispatch({
      type: 'NULLIFY_USER',
      data: null
    })
  }
}


export default userReducer
export { login, setUserFromStorage, nullifyUser }
