const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
};

const newProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (product) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [product.name, product.id],
  );
  return product;
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
  return `The product with id: ${id} has been secessfull deleted!`;
};

module.exports = {
  findAll,
  findById,
  newProduct,
  deleteProduct,
  updateProduct,
};