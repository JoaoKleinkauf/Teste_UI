/// <reference types='cypress' />

describe('Funcionalidade Pagina de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quant = 3

        cy.get('[class="product-block grid"]').contains('Ryker LumaTech™ Tee (V-neck)').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()
        

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quant)
    });

});