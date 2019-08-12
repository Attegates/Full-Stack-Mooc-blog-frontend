describe('Blog app', function () {

  beforeEach(function () {
    //cy.clearLocalStorage() unnecessary - cypress should run this automagically before each test
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=usernameInput]')
      .type('73571')
    cy.get('[data-cy=passwordInput]')
      .type('salasana')
    cy.get('[data-cy=loginButton]')
      .click()
  })

  it('new blog can be added', function () {
    cy.contains('new blog')
      .click()
    cy.get('[data-cy=titleInput]')
      .type("BLACK METAL IST KRIEG")
    cy.get('[data-cy=authorInput]')
      .type('Atte Gates')
    cy.get('[data-cy=urlInput]')
      .type("###")
    cy.get('[data-cy=addBlogButton]')
      .click()
    cy.contains('BLACK METAL IST KRIEG')
  })
})
