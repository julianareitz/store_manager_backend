const validateName = require('../middlewares/nameValidation');
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

const getNewProduct = async () => {
  await productsModel.newProduct();
  validateName(); 
};

module.exports = {
  getAllProducts,
  getProductById,
  getNewProduct,
};