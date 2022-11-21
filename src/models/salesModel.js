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

const insertSale = async (_id) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (default)',
    [],
  );
  return insertId;
};

const insert = async (sales, id) => {
  const saleId = id || await insertSale();
  
  const placeholders = Object.keys(sales)
  .map((_key) => '?')
  .join(', ');
  
  const values = sales
    .reduce((acc, { productId, quantity }) =>
      [...acc, saleId, productId, quantity], []);

    Object.values(sales)
    .map((key) => `${key}`)
    .join(', ');
  
  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(sales)],
  );

  return insertId;
};

module.exports = {
  findAll,
  findById,
  insertSale,
  insert,
};