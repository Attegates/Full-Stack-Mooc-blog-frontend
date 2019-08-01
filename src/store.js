import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import commentReducer from './reducers/commentReducer'

const reducer = combineReducers({
  notificationReducer,
  blogReducer,
  userReducer,
  usersReducer,
  commentReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
