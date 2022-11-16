const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'products.json');

const readFile = async () => {
  const products = await fs.readFile(filePath);
  const response = JSON.parse(products);
  return response;
};

const insertNewProduct = async (product) => {
  const allProducts = await readFile();
  const newProduct = JSON.stringify([...allProducts, product]);
  await fs.writeFile(
    filePath,
    newProduct,
  );
};

module.exports = {
  readFile,
  insertNewProduct,
};