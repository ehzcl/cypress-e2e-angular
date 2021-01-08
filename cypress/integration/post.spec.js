describe('Post', () => {
  beforeEach(() => {
    cy.login('testecypress@testecypress.com', 'testecypress')
  })

  it('Novo Post', () => {
    const title='Cypress 2E2 Digital Innovation One'
    cy.contains('New Article').click()
    cy.location('pathname').should('equal', '/editor')
    cy.get('[formcontrolname=title]').type(title)
    cy.get('[formcontrolname=description]').type('Ponta a Ponta')
    cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
    cy.contains('Publish Article').click()
    cy.get('h1').contains('Cypress 2E2')
  })

  // it('Edicao de post', () => {

  // })
})
