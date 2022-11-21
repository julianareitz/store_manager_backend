const errorMap = {
  NOT_FOUND: 404,
  INVALID_VALUE: 404,
  'string.min': 422,
  'number.min': 422,
  'string.required': 400,
  'any.required': 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};