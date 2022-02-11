const request = require('supertest');
const API_URL = "https://viacep.com.br/";


describe('Faça requisições com o método GET', () => {

    it('Faça uma requisição de um CEP existente sem Hífen e deve retornar o status 200 e o objeto contendo as informações da cidade', () => {
        request(API_URL)
          .get('/ws/37470000/json/')
          .set('Accept', 'application/json')
          .expect(200)
          .then(response => {
            expect(response.body.localidade).toEqual('São Lourenço');
          })
    })

    it('Faça uma requisição de um CEP existente com Hífen e deve retornar o status 200 e o objeto contendo as informações da cidade', async () => {
      const data = {
        cep: "37470-000",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "São Lourenço",
        uf: "MG",
        ibge: "3163706",
        gia: "",
        ddd: "35",
        siafi: "5273"
      }
      await request(API_URL)
        .get('/ws/37470-000/json/')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(data);
        })           
    })

    it('Faça uma requisição por um CEP com 9 dígitos e deve retornar o status 400', async () => {
        await request(API_URL)
          .get('/ws/374700000/json/')
          .set('Accept', 'application/json')
          .expect(400)
    })

    it('Faça uma requisição por um CEP alfanumérico e deve retornar o status 400', async () => {
        await request(API_URL)
        .get('/ws/3747000A0/json/')
        .set('Accept', 'application/json')
        .expect(400)
    })

    it('Faça uma requisição por um CEP com espaço e deve retornar o status 400', async () => {
        await request(API_URL)
        .get('/ws/3747000 0/json/')
        .set('Accept', 'application/json')
        .expect(400)
    })

    it('Faça uma requisição por um CEP correto, porem com a rota errada', async () => {
      await request(API_URL)
      .get('/wr/37470000/json/')
      .set('Accept', 'application/json')
      .expect(404)
    })
 
    it('Faça uma requisição de um CEP inexistente deve retornar o status 200 e uma mensagem de "erro": true', () => {
      request(API_URL)
        .get('/ws/99999999/json/')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
          expect(response.body.erro).toEqual(true);
        })
  })
})

describe('Faça requisições com o método POST', () => {

    it('Faça uma requisição POST com um body completo e receba o status 403', () => {
      const data = {
        cep: "37470-000",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "São Lourenço",
        uf: "MG",
        ibge: "3163706",
        gia: "",
        ddd: "35",
        siafi: "5273"
      }

      request(API_URL)
        .post('/ws/37470000/json/')
        .set('Accept', 'application/json')
        .send(data)
        .expect(403)
    })



})

