const express = require('express');

const productsController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.get('/:id', productsController.getProductById);

module.exports = productRouter;