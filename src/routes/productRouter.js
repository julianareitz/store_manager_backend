const express = require('express');

const productsModel = require('../models/connection');

const productRouter = express.Router();

productRouter.get('/', productsModel.findAll);
productRouter.get('/:id', productsModel.findAll);

module.exports = productRouter;