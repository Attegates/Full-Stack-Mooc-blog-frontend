import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Blog from './Blog'

describe('Blog', () => {


  test('default render shows only the title and author', () => {

    const blog = {
      author: 'Atte Gates',
      title: 'BLACK METAL IST KRIEG',
      likes: 14,
      url: 'prööt!',
      user: {
        name: 'Atte Gates'
      }
    }

    const component = render(
      <Blog
        blog={blog}
      />
    )

    const basicContent = component.container.querySelector('.basicContent')
    expect(basicContent).toHaveTextContent('BLACK METAL IST KRIEG')
    expect(basicContent).toHaveTextContent('Atte Gates')

    // extra content should not exists at this point
    const extraContent = component.container.querySelector('.extendedContent')
    expect(extraContent).toBe(null)
  })

  test('after clicking on the basic content extra content is rendered', () => {
    const blog = {
      author: 'Atte Gates',
      title: 'BLACK METAL IST KRIEG',
      likes: 14,
      url: 'prööt!',
      user: {
        name: 'Atte Gates'
      }
    }

    const component = render(
      <Blog
        blog={blog}
      />
    )

    const basicContent = component.container.querySelector('.basicContent')
    fireEvent.click(basicContent)

    const extraContent = component.container.querySelector('.extendedContent')
    expect(extraContent).not.toBe(null)
    expect(extraContent).toHaveTextContent('added by')
    expect(extraContent).toHaveTextContent('likes')
  })
})
