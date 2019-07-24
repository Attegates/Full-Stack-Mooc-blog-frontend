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


  /* DOES NOT WORK
  test.skip('if user is logged in blogs are rendered', async () => {
    //set the user and rerender
    const user = {
      username: 'atteg',
      token: 'ajwt',
      name: 'Atte Gates'
    }
    localStorage.setItem('loggedInUser', JSON.stringify(user))

    const component = render(
      <App />
    )
    component.rerender(<App />)

    component.debug()

    await waitForElement(() => {
      component.container.querySelector('.blog')
    })

    const blogs = component.container.querySelectorAll('.blog')
    console.log(blogs.length)

  })
  */

})
