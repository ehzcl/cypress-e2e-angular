describe('Seguir', () => {
  it('Seguir usuario', () => {
    const usuario = 'usuario'+(new Date()).getTime()
    const senha = 'senha'+(new Date()).getTime()
    const email = usuario+'@gmail.com'

    cy.register(usuario, email, senha)

    cy.wait(10000)
    cy.visit('/profile/testecypress')
    cy.contains('Follow').click()
  })
})
