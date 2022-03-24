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

  it('Verifica mensagens de email invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('Gabrieli'); //vai digitar dentro do input qualquer coisa diferente de um email valido
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  })

  it('Verifica mensagens de senha com menos de 8 caracteres', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('1234');
    cy.contains('button', 'Register').click(); //para validar que saiu do campo e de fato ver o que esta acontecendo
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  })

  it('Verifica mensagens de username com letra maiuscula', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('Gabi');
    cy.contains('button', 'Register').click(); //para validar que saiu do campo e de fato ver o que esta acontecendo
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
  })

  it('Fazer login com usuario valido', () => {
    cy.get('input[formcontrolname="userName"]').type('flavio');
    cy.get('input[formcontrolname="password"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('a', '(Logout)').should('be.visible');
  })

  it('Fazer login com usuario invalido', () => {
    cy.get('input[formcontrolname="userName"]').type('gabi');
    cy.get('input[formcontrolname="password"]').type('1234');
    cy.get('button[type="submit"]').click();
    cy.on('windows:alert', (str) => {
      expect(str).to.equal('Invalid user name or password')
    })
  })
})