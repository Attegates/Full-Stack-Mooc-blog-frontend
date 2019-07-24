import React from 'react'
import { useField } from '../hooks/index'

const AddBlogForm = ({ handleAdd }) => {

  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const onSubmit = (event) => {
    event.preventDefault()
    handleAdd(title.value, author.value, url.value)
    title.resetField()
    author.resetField()
    url.resetField()
  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        title
        <input
          {...title}
        />
      </div>
      <div>
        author
        <input
          type={author.type}
          value={author.value}
          onChange={author.onChange}
          name="Author"
        />
      </div>
      <div>
        url
        <input
          type={url.type}
          value={url.value}
          onChange={url.onChange}
          name="Url"
        />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default AddBlogForm