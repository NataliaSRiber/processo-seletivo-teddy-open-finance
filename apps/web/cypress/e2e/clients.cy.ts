describe('Página de Clientes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/clients');
  });

  it('deve encontrar o título da página', () => {
    cy.contains('clientes foram encontrados').should('be.visible');
  });

  it('deve verificar o botão de criar cliente', () => {
    cy.contains('Criar cliente').should('be.visible');
  });

  it('deve abrir o modal de criar cliente', () => {
    cy.contains('Criar cliente').click();
    
    cy.contains('Criar cliente').should('be.visible');
    cy.get('input').first().should('be.visible'); 
    cy.get('input[type="number"]').first().should('be.visible');
  });

  it('deve preencher e salvar um novo cliente', () => {
    cy.contains('Criar cliente').click();
    
    cy.get('input').first().type('Cliente Teste Cypress', { force: true });
    cy.get('input[type="number"]').first().type('5000', { force: true });
    cy.get('input[type="number"]').last().type('100000', { force: true });
    
    cy.get('button').contains('Criar').click();
    cy.contains('Cliente Teste Cypress', { timeout: 10000 }).should('be.visible');
  });

  it('deve excluir cliente', () => {
    cy.contains('Criar cliente').click();
    
    cy.get('input').first().type('Cliente para Excluir', { force: true });
    cy.get('input[type="number"]').first().type('3000', { force: true });
    cy.get('input[type="number"]').last().type('50000', { force: true });
    
    cy.get('button').contains('Criar').click();

    cy.contains('Cliente para Excluir', { timeout: 10000 }).should('be.visible')
    
    cy.get('[data-test="delete-btn"]').last().click()

    cy.get('button').contains('Excluir cliente').click()

    cy.contains('Cliente para Excluir', { timeout: 10000 }).should('not.exist');
  });
});