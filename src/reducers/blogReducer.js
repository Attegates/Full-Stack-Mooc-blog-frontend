import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.data]
    case 'INIT_BLOGS':
      return action.data
    default:
      return state
  }
}

const createBlog = (blog) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(blog)
      dispatch({
        type: 'CREATE_BLOG',
        data: newBlog,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export default blogReducer
export { initBlogs, createBlog }
