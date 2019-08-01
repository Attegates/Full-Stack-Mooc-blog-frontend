import commentService from '../services/comments'

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.data]
    case 'INIT_COMMENTS':
      return action.data
    default:
      return state
  }
}

const addComment = (comment) => {
  return async (dispatch) => {
    const newComment = await commentService.create(comment)
    dispatch({
      type: 'ADD_COMMENT',
      data: newComment,
    })
  }
}

const initComments = () => {
  return async (dispatch) => {
    const comments = await commentService.getAll()
    dispatch({
      type: 'INIT_COMMENTS',
      data: comments,
    })
  }
}

export default commentReducer
export { addComment, initComments }
