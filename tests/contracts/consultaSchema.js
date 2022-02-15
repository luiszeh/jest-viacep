const Joi = require('joi');


const schema = () => { Joi.object({
    cep: Joi.number().max(9).required().positive(),

    logadouro: Joi.number().empty('').required(),

    complemento: Joi.string().empty('').required(),

    bairro: Joi.string().empty('').required(),

    localidade: Joi.string(),

    uf: Joi.string().max(2).required(),

    ibge: Joi.number().precision(7).required().positive(),

    gia: Joi.string().empty('').required(),

    ddd: Joi.number().precision(2).required(),

    siafi: Joi.number().precision(4).required()
})}

module.exports = schema;
