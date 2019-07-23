import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message }) => {

  if (message === null) {
    return null
  }


  const messageColor = message.isError ? 'red' : 'green'

  const style = {
    color: messageColor,
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }


  return (
    <div style={style}>
      {message.message}
    </div>
  )
}

 Notification.propTypes = {
   message: PropTypes.object
 }

export default Notification