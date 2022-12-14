const joiValidation = require('./joiValidation');
const mapError = require('./mapError');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = joiValidation.nameValidation.validate({ name });
  if (error) {
    const { type, message } = error.details[0];
    return res.status(mapError.mapError(type)).json({ message });
  }
  next();
};

module.exports = nameValidation;
