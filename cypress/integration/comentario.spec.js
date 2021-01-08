describe('Comentario', () => {
  beforeEach(() => {
    cy.login('testecypress@testecypress.com', 'testecypress')
  })

  it('escrever', () => {
    cy.contains('Global Feed').click()
    cy.get('.preview-link').first().click()
    cy.get('.form-control').type('Sensacional')
    cy.get('.btn-primary').click()
    cy.contains('Sensacional')
  })
})
