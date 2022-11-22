const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

module.exports = {
  getAllSales,
};