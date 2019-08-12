describe('Blog app', function () {

  beforeEach(function () {
    //cy.clearLocalStorage() unnecessary - cypress should run this automagically before each test

    // reset the database
    cy.request('POST', 'http://localhost:3000/api/testing/reset')
    const user = {
      name: 'Testi Testeri',
      username: 'testi',
      password: 'testi'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)

    cy.visit('http://localhost:3000')
    cy.get('[data-cy=usernameInput]')
      .type('testi')
    cy.get('[data-cy=passwordInput]')
      .type('testi')
    cy.get('[data-cy=loginButton]')
      .click()
  })

  it('new blog can be added', function () {
    cy.contains('new blog')
      .click()
    cy.get('[data-cy=titleInput]')
      .type('BLACK METAL IST KRIEG')
    cy.get('[data-cy=authorInput]')
      .type('Atte Gates')
    cy.get('[data-cy=urlInput]')
      .type('###')
    cy.get('[data-cy=addBlogButton]')
      .click()
    cy.contains('BLACK METAL IST KRIEG')
  })

  it('blog can be removed', function () {
    cy.contains('new blog')
      .click()
    cy.get('[data-cy=titleInput]')
      .type('BLACK METAL IST KRIEG')
    cy.get('[data-cy=authorInput]')
      .type('Atte Gates')
    cy.get('[data-cy=urlInput]')
      .type('###')
    cy.get('[data-cy=addBlogButton]')
      .click()
    cy.get('[data-cy=blogLink]')
      .click()
    cy.get('[data-cy=removeBlogButton]')
      .click()
    cy.get('[data-cy=blogLink]')
      .should('not.exist')
  })

})
