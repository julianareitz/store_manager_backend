const productsModel = require('../models/productModel');

const getAllProducts = async () => {
  const products = await productsModel.findAll();
  return products;
};

const getProductById = async (id) => {
  const productById = await productsModel.findById(id);
  if (!productById) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: productById };
};

module.exports = {
  getAllProducts,
  getProductById,
};