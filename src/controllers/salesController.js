const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();

  return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params; 

  const { message } = await salesService.getSalesById(id);

  res.status(200).json(message);
};

module.exports = {
  getAllSales,
  getSalesById,
};