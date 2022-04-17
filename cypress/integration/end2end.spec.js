describe('Verifica aplicação', () => {
  it('Testa aplicação inteira', () => {
    cy.visit('/');
    
    cy.get('#form-search-button').should('not.exist');

    cy.get('button.search-button-header-cypress').click()

    cy.get('#form-search-button').should('exist');

    cy.get('#form-search-control').type('cabernet');
    cy.get('#form-search-button').click();

    cy.get('#form-search-button').should('not.exist');
    cy.contains('17 produtos encontrados')
    
    cy.get("#default-radio-1").click();
    cy.contains('0 produtos encontrados');

    cy.get("#default-radio-2").click();
    cy.contains('0 produtos encontrados');

    cy.get("#default-radio-3").click();
    cy.contains('32 produtos encontrados');

    cy.get("#default-radio-4").click();
    cy.contains('15 produtos encontrados');

    cy.get("#default-radio-5").click();
    cy.contains('0 produtos encontrados');

    cy.get('button').contains("Loja").click();
    cy.contains('62 produtos encontrados');

    cy.get('.botao-adicionar-0').click();

    cy.url().should('include', '/0');

    cy.get('button').contains('+').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('-').click();

    cy.get('button').contains('ADICIONAR').click();
    cy.url().should('include', '/success');

    cy.get('.cart-button-cypress').click();
    cy.url().should('include', '/cart');

    cy.get('h3').contains('Total: 193.80');

    cy.get('button').contains('Continuar compras').click();
    cy.url().should('include', '/');

    cy.get('#before-button').should('not.exist');
    cy.get('#after-button').click();
    cy.get('#before-button').should('exist');

    cy.get('#after-button').click();
    cy.get('#after-button').click();
    cy.get('#after-button').click();
    cy.get('#after-button').click();
    cy.get('#after-button').click();
    cy.get('#after-button').click();
    cy.get('#after-button').should('not.exist');

    cy.get('#before-button').click();
    cy.get('#after-button').should('exist');

    cy.get('#before-button').click();
    cy.get('#before-button').click();
    cy.get('#before-button').click();
    cy.get('#before-button').click();
    cy.get('#before-button').click();
    cy.get('#before-button').should('not.exist');
    cy.get('.botao-adicionar-2').click();

    cy.url().should('include', '/2');

    cy.get('button').contains('+').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('-').click();

    cy.get('button').contains('ADICIONAR').click();
    cy.url().should('include', '/success');

    cy.get('.cart-button-cypress').click();
    cy.url().should('include', '/cart');

    cy.get('h3').contains('Total: 526.90');

    cy.get('#delete-0-cypress').click();
    cy.get('h3').contains('Total: 333.10');

    cy.get('button').contains('Continuar compras').click();
    cy.url().should('include', '/');

    cy.get('button.search-button-header-cypress').click()

    cy.get('#form-search-button').should('exist');

    cy.get('#form-search-control').type('quinta');
    cy.get('#form-search-button').click();
    cy.contains('15 produtos encontrados');

    cy.get('.botao-adicionar-36').click();
    cy.url().should('include', '/36');
    cy.get('button').contains('ADICIONAR').click();
    cy.url().should('include', '/success');

    cy.get('button').contains('Clube').click();
    cy.url().should('include', '/maintenence');

    cy.get('.return-button').click();
    cy.url().should('include', '/');

    cy.get('.cart-button-cypress').click();
    cy.url().should('include', '/cart');
    cy.get('h3').contains('Total: 430.00');

    cy.get('button').contains('Finalizar Compra').click();
    cy.url().should('include', '/contatos');
  })
})