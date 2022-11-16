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

module.exports = {
  getAllProducts,
  getProductById,
};
