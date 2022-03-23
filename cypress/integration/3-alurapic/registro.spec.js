describe('Login e registro de usuarios', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com')
  })
  cy.contains
  it('Verifica mensagens validacao', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible'); //quer dizer que precisa estar visivel
    
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');

  })
})