const productsService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.newProduct();
  if (type) return res.status(type).json({ message });
  return res.status(type).json(name);
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
};
