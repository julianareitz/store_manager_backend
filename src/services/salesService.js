const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const getSalesById = async (id) => {
  const arrayResult = await salesModel.getSalesById(id);
  
  if (!arrayResult.length) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: arrayResult };
};

module.exports = {
  getAllSales,
  getSalesById,
};