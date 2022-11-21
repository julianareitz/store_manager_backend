const joi = require('joi');

const nameValidation = joi.object({ name: joi.string().min(5).required() });

const productValidation = joi.object({ id: joi.number().integer().min(1).required() });

module.exports = {
  nameValidation,
  productValidation,
};