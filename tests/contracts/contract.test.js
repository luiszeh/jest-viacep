const Joi = require('joi');
const request = require('supertest');
const API_URL = "https://viacep.com.br/";
const schema = require("./consultaSchema");

describe('Teste contrato API ViaCep', () => {

    it('Valida se o status é 200 e se retorna o schema correto', async () => {

        const response = await request(API_URL)
            .get('ws/25035030/json')
            .expect(200)
            // const resultado
            Joi.assert(response.body, schema)
            })    
    })
