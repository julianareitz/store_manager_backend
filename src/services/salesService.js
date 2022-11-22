const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const getSalesById = async (id) => {
  const arrayResult = await salesModel.getSalesById(id);
  return { type: null, message: arrayResult };
};

module.exports = {
  getAllSales,
  getSalesById,
};