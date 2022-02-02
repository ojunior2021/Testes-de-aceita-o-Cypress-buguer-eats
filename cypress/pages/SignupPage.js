class SignupPage {
    go() {
        // visita a pagina
        cy.visit('/');

        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }
    // função type preenche os campos
    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);


        cy.get('input[name="postalcode"]').type(deliver.address.postalcode);

        cy.get('input[type="button"][value="Buscar CEP"]').click();

        cy.get('input[name="address-number"]').type(deliver.address.address_number);
        cy.get('input[name="address-details"]').type(deliver.address.address_details);

        // faz uma validação se o elemento que foi preenchido automaticamente é identico
        // ao indicado na variavel endereco
        cy.get('input[name="address"]').should('have.value', deliver.address.street);
        cy.get('input[name="district"]').should('have.value', deliver.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.state);

        cy.contains('.delivery-method li', deliver.delivery_method).click();
        // fazendo um upload de um arquivo
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    subimit() {
        cy.get('button[type="submit"]').click()

    }

    modalContentShouldBe(expect_message) {
        cy.get('#swal2-html-container').should('have.text', expect_message)

    }
    
    alertMessageShouldBe(expect_message) {
        // cy.get('.alert-error').should('have.text', expect_message)
        
        // validando varios elementos com o mesmo localizador mas com textos  diferentes
        cy.contains('.alert-error', expect_message).should('be.visible')
    }



}

export default new SignupPage;