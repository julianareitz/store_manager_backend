const productsModel = require('../models/productsModel');

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

const newProduct = async (name) => {
  const id = await productsModel.newProduct(name);
  return { type: null, message: { name, id } };
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
};