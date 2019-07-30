const notificationReducer = (state = null, action) => {
  console.log('state: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'RESET_NOTIFICATION':
      return action.message
    default:
      return state
  }
}

const setNotification = (message, showForSeconds) => {

  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
    })
    setTimeout(() => {
      dispatch(
        resetNotification()
      )
    }, showForSeconds * 1000)
  }
}

const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
    message: null
  }
}

export { setNotification, resetNotification }
export default notificationReducer
