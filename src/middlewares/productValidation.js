const joiValidation = require('./joiValidation');
const mapError = require('./mapError');

const validateId = (req, res, next) => {
  const { id } = req.params;
  const { error } = joiValidation.productValidation.validate({ id });
  if (error) {
    const { type, message } = error.details[0];
    return res.status(mapError.mapError(type)).json({ message });
  }
  next();
};

module.exports = validateId;
