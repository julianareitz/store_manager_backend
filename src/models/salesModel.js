const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM sales',
  );
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [id],
  );
  return result;
};

const newSale = async () => {
  const [{ insertDate }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (GETDATE() AS Date)',
  );
  return insertDate;
};

const newSaleDetails = async (saleId, productId, quantity) => {
  const [{ insertSaleDetails }] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?)',
    [saleId],
    [productId],
    [quantity],
  );
  return insertSaleDetails;
};

module.exports = {
  findAll,
  findById,
  newSaleDetails,
  newSale,
};