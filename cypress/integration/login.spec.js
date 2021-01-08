const { createYield } = require("typescript")

describe('Conduit Login', () => {
  it('Login sucesso', () =>{
    cy.login('testecypress@testecypress.com', 'testecypress')
    cy.get('.nav-item:nth-child(4) > .nav-link').click()
    cy.get('.btn').eq(1).click()
    cy.url().should('contain', '/settings')
  })
})
