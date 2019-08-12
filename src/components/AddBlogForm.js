import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks/index'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import Form from './styled/Form'
import Button from './styled/Button'


const AddBlogForm = (props) => {

  // take out the resetField() from useField objects.
  const title = useField('text')
  const { resetField: titleReset, ...titleInputFields } = title
  const author = useField('text')
  const { resetField: authorReset, ...authorInputFields } = author
  const url = useField('text')
  const { resetField: urlReset, ...urlInputFields } = url

  const onSubmit = async (event) => {
    event.preventDefault()
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value
    }
    try {
      await props.createBlog(blogObject)
    } catch (error) {
      props.setNotification({ message: `${error}`, isError: true }, 5)
      return
    }
    props.setNotification({ message: `a new blog ${blogObject.title} by ${blogObject.author} added`, isError: false }, 5)
    titleReset()
    authorReset()
    urlReset()
    props.toggleVisibility()  // from parent <Toggleable />
  }


  return (
    <Form.Form onSubmit={onSubmit}>
      <div>
        title
        <Form.Input
          data-cy="titleInput"
          {...titleInputFields}
        />
      </div>
      <div>
        author
        <Form.Input
          data-cy="authorInput"
          {...authorInputFields}
        />
      </div>
      <div>
        url
        <Form.Input
          data-cy="urlInput"
          {...urlInputFields}
        />
      </div>
      <Button data-cy="addBlogButton" primary type="submit">add</Button>
    </Form.Form>
  )
}

const mapToDispatch = {
  createBlog,
  setNotification
}

export default connect(null, mapToDispatch)(AddBlogForm)
