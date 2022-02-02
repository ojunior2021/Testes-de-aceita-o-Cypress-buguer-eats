//importando e ja instanciando a Classe
import signup from '../pages/SignupPage'


// inicia a suite de testes
describe('Signup', function()  {
    beforeEach(function () {
        cy.fixture('delivery').then((d) => {
            this.delivery = d
        })
    });

       // inicia os casos de testes
        it('User should be deliver', function() {

            // cria a massa de testes tendo um objeto dentro de ouotro

            signup.go();

            // passando a massa de testes que foi importada no arquivo json, para a função fillForm
            signup.fillForm(this.delivery.signup);
            signup.subimit();

            const expect_message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.modalContentShouldBe(expect_message)
        });

        it('Incorrect document', function()  {

            // cria a massa de testes tendo um objeto dentro de ouotro

            signup.go();
            signup.fillForm(this.delivery.cpf_inv);
            signup.subimit();
            signup.alertMessageShouldBe('Oops! CPF inválido')

        });

        it('Incorrect email', function()  {

            // cria a massa de testes tendo um objeto dentro de ouotro

            signup.go();
            signup.fillForm(this.delivery.email_inv);
            signup.subimit();
            signup.alertMessageShouldBe('Oops! Email com formato inválido.')

        });

    });

