const express = require('express');

const productsController = require('../controllers/productController');
const validateName = require('../middlewares/nameValidation');

const productRouter = express.Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.get('/:id', productsController.getProductById);

productRouter.post('/', validateName, productsController.newProduct);

productRouter.delete('/:id', productsController.deleteProduct);

module.exports = productRouter;