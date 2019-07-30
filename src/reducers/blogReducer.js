import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.data]
    case 'ADD_LIKE':
      return state.map(b => b.id !== action.data.id ? b : action.data)
    case 'DELETE_BLOG':
      return state.filter(b => b.id !== action.data.id)
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

const deleteBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.deleteBlog(id)
      dispatch({
        type: 'DELETE_BLOG',
        data: { id }
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

const addLike = (blog) => {
  return async (dispatch) => {
    try {
      const toChange = { ...blog, likes: blog.likes + 1 }
      console.log(blog)
      const updatedBlog = await blogService.update(blog.id, toChange)
      dispatch({
        type: 'ADD_LIKE',
        data: updatedBlog,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default blogReducer
export { initBlogs, createBlog, addLike, deleteBlog }
