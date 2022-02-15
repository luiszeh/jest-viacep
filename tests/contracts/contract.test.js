const request = require('supertest');
const API_URL = "https://viacep.com.br/";
const schema = require("./consultaSchema");

describe('GET de um CEP', () => {

    it('Faça uma requisição e deve retornar status 200 e o Schema correto', () => {
        request(API_URL)
            .get('ws/37470000/json')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(schema)
            })
      
    })
})
