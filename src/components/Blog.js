import React from 'react'
import { connect } from 'react-redux'
import { addLike, deleteBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/index'
import { addComment } from '../reducers/commentReducer'
import Form from './styled/Form'
import Button from './styled/Button'

const Comments = ({ comments }) => {
  return (
    <ul>
      {comments.map(c =>
        <li key={c.id}>{c.content}</li>
      )}
    </ul >
  )
}

const CommentForm = ({ blogId, addComment }) => {
  const { resetField: commentReset, ...comment } = useField('text')
  const handleSubmit = (event) => {
    event.preventDefault()
    commentReset()
    addComment(blogId, { content: comment.value })
  }
  return (
    <Form.Form onSubmit={handleSubmit}>
      <div>
        comment
        <Form.Input
          {...comment}
        />
        <Button type="submit">add comment</Button>
      </div>
    </Form.Form>
  )
}

const Blog = (props) => {
  if (props.user === undefined || props.blog === undefined || props.comments === undefined) {
    return null
  }

  const blog = props.blog
  const showRemove = { display: props.user.username === blog.user.username ? '' : 'none' }

  return (
    <div>
      <a href={blog.url}>{blog.url}</a>
      <p>{blog.likes} likes <Button onClick={() => props.addLike(blog)}>like</Button></p>
      <p>added by {blog.user.name}</p>
      <Button primary style={showRemove} onClick={() => props.deleteBlog(blog.id)}>remove</Button>
      <h3>comments</h3>
      <CommentForm blogId={blog.id} addComment={props.addComment} />
      <Comments comments={props.comments} />
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogReducer.find(b => b.id === ownProps.id),
    user: state.userReducer,
    comments: state.commentReducer.filter(c => c.blog === ownProps.id)
  }
}

const mapToDispatch = {
  addLike,
  deleteBlog,
  addComment,
}

export default connect(mapStateToProps, mapToDispatch)(Blog)
