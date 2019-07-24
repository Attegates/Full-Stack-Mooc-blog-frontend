import React from 'react'
import { useField } from '../hooks/index'

const AddBlogForm = ({ handleAdd }) => {

  // take out the resetField() from useField objects.
  const title = useField('text')
  const { resetField: titleReset, ...titleInputFields } = title
  const author = useField('text')
  const { resetField: authorReset, ...authorInputFields } = author
  const url = useField('text')
  const { resetField: urlReset, ...urlInputFields } = url

  const onSubmit = (event) => {
    event.preventDefault()
    handleAdd(title.value, author.value, url.value)
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

export default AddBlogForm