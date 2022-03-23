describe('Alura busca cursos', () => {
  beforeEach(() => {
    cy.visit('http://www.alura.com.br');
  })

  it('Buscar curso de React', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('react native');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Curso React Native: começando do zero');
  })

})