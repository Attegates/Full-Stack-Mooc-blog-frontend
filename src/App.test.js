import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')

import App from './App'

describe('<App />', () => {
  test('if no user logged, show login form and blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(() =>
      component.container.querySelector('.loginForm')
    )

    expect(component.container.querySelector('.loginForm')).not.toBe(null)

    expect(component.container.querySelectorAll('.blog').length).toBe(0)

  })
})
