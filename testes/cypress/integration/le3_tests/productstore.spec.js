/// <reference types="cypress"/>


describe('Cenário de teste: Testar funcionalidades do site Amazon', () => {

    it.skip ('Caso de teste: Registrar um usuário com sucesso', () => {

        cy.visit('https://www.amazon.com.br');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#createAccountSubmit').click();
        cy.get('#ap_customer_name').type('teste_para_le3');
        cy.get('#ap_email').type('testeparale3@gmail.com')
        cy.get('#ap_password').type('teste123');
        cy.get('#ap_password_check').type('teste123');
        cy.get('#continue').click();
        cy.get('#cvf-input-code').type('624172');
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click();
        cy.get('#nav-link-accountList-nav-line-1').should('have.text', 'Olá, teste_para_le3');
    })

    it.skip ('Caso de teste: Falha ao realizar login', () => {

        cy.visit('https://www.amazon.com.br');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type('testando');
        cy.get('#ap_email').clear();
        cy.get('.a-button-inner > #continue').click();
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content')
            .should('contain.text', 'Digite seu e-mail ou número de telefone celular');
    })

    it.skip ('Caso de teste: Realizar login com sucesso', () => {

        cy.visit('https://www.amazon.com.br');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type('testeparale3@gmail.com');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('teste123');
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList-nav-line-1').should('have.text', 'Olá, teste_para_le3');
    })

    it.skip ('Caso de teste: Adicionar produto no carrinho', () => {

        cy.visit('https://www.amazon.com.br/OCTOO-UP-BL-Suporte-Uptable-Preto/dp/B07BTC67VS/ref=zg-bs_furniture_1/133-2634023-3339020?pd_rd_w=OES6Q&pf_rd_p=c0c0f25f-aaf5-43d0-b46e-c8c2c04a86c2&pf_rd_r=582EGBSGH8T3W6JZHEG3&pd_rd_r=dde1691f-0db5-4953-999c-6663f314321e&pd_rd_wg=tZWyO&pd_rd_i=B07BTC67VS&psc=1');
        cy.get('#add-to-cart-button').click();
        logarUsusario();
        cy.get('#nav-cart').click();
        cy.get('#sc-subtotal-label-activecart').should('contain.text', 'ite');

    })

    it.skip ('Caso de teste: Excluir produto no carrinho', () => {

        cy.visit('https://www.amazon.com.br')
        logarUsusario();
        cy.get('#nav-cart').click();
        cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();
        cy.get('.sc-cart-header > .a-row > .a-spacing-mini').should('contain.text', 'Seu carrinho de compras da Amazon está vazio.');
    })

    it.skip('Caso de teste: Pesquisar produto com sucesso', () => {

        cy.visit('https://www.amazon.com.br');
        cy.get('#twotabsearchtextbox').type('Percy Jackson e os olimpianos');
        cy.get('#nav-search-submit-button').click();
        cy.get('.rush-component.s-expand-height > .s-include-content-margin > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image').should('be.enabled')


    })

    it ('Caso de teste: Adicionar produto à lista de compras', () => {


        cy.visit('https://www.amazon.com.br/OCTOO-UP-BL-Suporte-Uptable-Preto/dp/B07BTC67VS/ref=zg-bs_furniture_1/133-2634023-3339020?pd_rd_w=OES6Q&pf_rd_p=c0c0f25f-aaf5-43d0-b46e-c8c2c04a86c2&pf_rd_r=582EGBSGH8T3W6JZHEG3&pd_rd_r=dde1691f-0db5-4953-999c-6663f314321e&pd_rd_wg=tZWyO&pd_rd_i=B07BTC67VS&psc=1');
        logarUsusario();
        cy.get('#add-to-wishlist-button-submit').click();
        cy.get('#WLHUC_result_action_add').should('contain.text', 'adicionado');

    })

})

//Função
function logarUsusario(){

    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('testeparale3@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('teste123');
    cy.get('#signInSubmit').click();

}