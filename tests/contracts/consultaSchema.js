const Joi = require('joi');


const schema = Joi.object().keys({
    cep: Joi.string().required(),

    logradouro: Joi.string().allow(''),

    complemento: Joi.string().allow(''),

    bairro: Joi.string().allow(''),

    localidade: Joi.string(),

    uf: Joi.string(),

    ibge: Joi.string(),

    gia: Joi.string().allow(''),

    ddd: Joi.string(),

    siafi: Joi.string()
})

module.exports = schema;

/* Dúvidas e comentários:

    1 - o cep é possivel realizar a pesquisa com hífen tbm, como testar isso?
    2 - como utilizar esse schema no assert la no arquivo de teste?
    3 - o precision é utilizado quando quero um valor que tenha exatamente um numero X de caracteres? ex: igbe que tem que ter 7 digitos
    4 - Não peguei como faço o assert do joi no arquivo de testes para "linkar" com meu schema e verificar os "matchs"

*/