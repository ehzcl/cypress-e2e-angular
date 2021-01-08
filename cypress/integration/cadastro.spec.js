// define('Cadastro', () => {
//   if('Sucesso' , () => {
//     cy.visit('http://localhost:4200/');
//     cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
//     cy.get('.form-group:nth-child(1) > .form-control').type('ehzcl'));
//     cy.get('.form-group:nth-child(2) > .form-control').type('ehzcl@email.com');
//     cy.get('.form-group:nth-child(3) > .form-control').type('123123123123');
//     cy.get('.btn').click();
//     cy.get('.ng-dirty:nth-child(4)').submit();
//   })
// })

const { createPartiallyEmittedExpression } = require("typescript")


describe('Conduit Cadastro' , () =>{
  const usuario  ='usuario'+(new Date()).getTime()
  const senha = 'senha'+(new Date()).getTime()

  it('Novo Usuario', () => {
    cy.visit('/register')
    cy.get('[formcontrolname=username]').type(usuario)
    cy.get('[formcontrolname=email]').type(usuario+'@gmail.com')
    cy.get('[formcontrolname=password]').type(senha)
    cy.get('.btn').click()
    cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
      .should('be.visible')
  })

  it('Usuario ja existe' , () => {
    cy.visit('/register')
    cy.get('[formcontrolname=username]').type(usuario)
    cy.get('[formcontrolname=email]').type(usuario+'@gmail.com')
    cy.get('[formcontrolname=password]').type(senha)
    cy.get('.btn').click()
    cy.location('pathname').should('equal', '/register')
    cy.get('.error-messages > li:nth-child(1)')
      .should('not.be.empty')
  })
})
