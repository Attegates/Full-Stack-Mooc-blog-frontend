import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks/index'
import { createBlog } from '../reducers/blogReducer'


const AddBlogForm = ({ createBlog, handleAdd }) => {

  // take out the resetField() from useField objects.
  const title = useField('text')
  const { resetField: titleReset, ...titleInputFields } = title
  const author = useField('text')
  const { resetField: authorReset, ...authorInputFields } = author
  const url = useField('text')
  const { resetField: urlReset, ...urlInputFields } = url

  const onSubmit = (event) => {
    event.preventDefault()
    //handleAdd(title.value, author.value, url.value)
    createBlog({ title: title.value })
    titleReset()
    authorReset()
    urlReset()
  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        title
        <input
          {...titleInputFields}
        />
      </div>
      <div>
        author
        <input
          {...authorInputFields}
        />
      </div>
      <div>
        url
        <input
          {...urlInputFields}
        />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

const mapToDispatch = {
  createBlog
}

export default connect(null, mapToDispatch)(AddBlogForm)
