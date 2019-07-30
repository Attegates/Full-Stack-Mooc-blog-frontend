import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'

const reducer = combineReducers({
  notificationReducer,
  blogReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
