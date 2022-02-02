//importando e ja instanciando a Classe
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SingnupFactory'


// inicia a suite de testes
describe('Signup', function () {

    var deliver = signupFactory.deliver()

    // inicia os casos de testes
    it('User should be deliver', function () {

        // cria a massa de testes tendo um objeto dentro de ouotro

        signup.go();

        // passando a massa de testes que foi importada no arquivo json, para a função fillForm
        signup.fillForm(deliver);
        signup.subimit();

        const expect_message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expect_message)
    });

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '546887465aa'


        // cria a massa de testes tendo um objeto dentro de ouotro

        signup.go();
        signup.fillForm(deliver);
        signup.subimit();
        signup.alertMessageShouldBe('Oops! CPF inválido')

    });

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'klophjsfh'



        // cria a massa de testes tendo um objeto dentro de ouotro

        signup.go();
        signup.fillForm(deliver);
        signup.subimit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    });

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'address-number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery-method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function () {
            signup.go()
            signup.subimit();

        });

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.alertMessageShouldBe(msg.output)
            });



        })


    });
});
