import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log(action.data)
      break
    case 'INIT_BLOGS':
      return action.data
    default:
      return state
  }
}

const createBlog = (blog) => {
  return async (dispatch) => {
    const newBlog = blog//await blogService.create(blog)
    dispatch({
      type: 'CREATE_BLOG',
      data: newBlog,
    })
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
