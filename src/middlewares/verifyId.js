const productsModel = require('../models/productsModel');

const verifyId = async (id) => {
  const productById = await productsModel.findById(id);
  if (!productById) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: productById };
};

module.exports = verifyId;