const Joi = require("joi");

const schema = Joi.object().keys({
  cep: Joi.string().required(),
  logradouro: Joi.string().allow(""),
  complemento: Joi.string().allow(""),
  bairro: Joi.string().allow(""),
  localidade: Joi.string(),
  uf: Joi.string(),
  ibge: Joi.string(),
  gia: Joi.string().allow(""),
  ddd: Joi.string(),
  siafi: Joi.string(),
});

module.exports = schema;
