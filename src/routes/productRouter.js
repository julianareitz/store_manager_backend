const express = require('express');

const productsController = require('../controllers/productController');
const nameValidation = require('../middlewares/nameValidation');

const productValidation = require('../middlewares/productValidation');

const productRouter = express.Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.get('/:id', productsController.getProductById);

productRouter.post('/', nameValidation, productsController.newProduct);

productRouter.put('/:id', nameValidation, productValidation, productsController.updateProduct);

productRouter.delete('/:id', productsController.deleteProduct);

module.exports = productRouter;