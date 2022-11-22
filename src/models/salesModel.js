const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT 
      sale_id AS saleId,
      date,
      product_id AS productId,
      quantity FROM sales_products AS sp
    JOIN sales AS sa ON (sa.id = sp.sale_id)
    ORDER BY saleId, productId`,
  );
  return result;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT 
      date,
      product_id AS productId,
      quantity FROM sales_products AS sp
    JOIN sales AS sa ON (sa.id = sp.sale_id)
    WHERE sale_id = ?
    ORDER BY productId`,
    [id],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSalesById,
};