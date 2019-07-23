import React from 'react'
import { render } from '@testing-library/react'

import SimpleBlog from './SimpleBlog'

describe('SimpleBlog', () => {

  let blog = {
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


})