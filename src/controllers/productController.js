const productsService = require('../services/productsService');

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
  const { type, message } = await productsService.newProduct(name);

  if (type) return res.status(404).json({ message });
  return res.status(201).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);

  if (type) return res.status(404).json({ message });
  res.sendStatus(204);
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
  deleteProduct,
};
