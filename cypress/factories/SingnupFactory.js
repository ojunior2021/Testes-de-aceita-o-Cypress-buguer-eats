const faker = require('faker');

export default {

    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '30332738159',
            email: faker.internet.email(firstName),
            whatsapp: '35936585020',
            address: {
                postalcode: '37702030',
                street: 'Rua Ômega',
                address_number: '274',
                address_details: 'Bloco 06 ap 02',
                district: 'Real Parque',
                state: 'Poços de Caldas/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data;


    }
}
    

