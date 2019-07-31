import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  notificationReducer,
  blogReducer,
  userReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
