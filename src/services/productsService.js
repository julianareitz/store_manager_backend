const productsModel = require('../models/productsModel');
const verifyId = require('../middlewares/verifyId');

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

const updateProduct = async (product) => {
  const verifyIdFunc = await verifyId(product.id);

  if (verifyIdFunc.type === 404) return verifyIdFunc;

  await productsModel.updateProduct(product);
  return { type: null, message: product };
};

const deleteProduct = async (id) => {
  const verifyIdFunc = await verifyId(id);

  if (verifyIdFunc.type === 404) return verifyIdFunc;

  const result = await productsModel.deleteProduct(id);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
  updateProduct,
  deleteProduct,
};