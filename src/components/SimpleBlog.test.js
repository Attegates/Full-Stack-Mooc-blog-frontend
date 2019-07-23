import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SimpleBlog from './SimpleBlog'

describe('SimpleBlog', () => {

  const blog = {
    title: 'BLACK METAL IST KRIEG',
    author: 'Atte Gates',
    likes: 0,
  }

  test('renders content', () => {
    const component = render(
      <SimpleBlog
        blog={blog}
      />
    )

    expect(component.container).toHaveTextContent('BLACK METAL IST KRIEG')
    expect(component.container).toHaveTextContent('Atte Gates')
    expect(component.container).toHaveTextContent('has 0 likes')

  })

  test('clicking the button twice calls event handler twice', () => {

    const mockHandler = jest.fn()

    const component = render(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )

    const button = component.container.querySelector('.likeButton')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })


})