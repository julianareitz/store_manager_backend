const { expect } = require('chai');
const sinon = require('sinon');


const productService = require('../../services/productService');
const productController = require('../../controllers/productController')

const {
  allProductsMock,
  newProductsMock,
  notFoundMessageMock,
  allProductsReturnMock,
  notFoundProductMock,
} = require('./productsMock');

describe('Tests products from controller layer', function () {

  it('01 - Test if returns all products', async function () {
    const res = {};
    const req = { body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    sinon.stub(productService, 'getAllProducts').resolves(allProductsReturnMock);
    await productController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsReturnMock.message);
  });

  it('02 - Test if returns product by id', async function () {
    const res = {};
    const req = { params: { id: 2 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves(allProductsReturnMock);
    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsMock.message);
  });

  it('03 - Test if returns error message if not found id', async function () {
    const res = {};
    const req = { params: { id: 500 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves(notFoundProductMock);
    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: notFoundMessageMock });
  });

  it('04 - Test if insert a new product', async function () {
    const res = {};
    const req = { body: { name: "Laço da verdade da Mulher Maravilha" } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'newProduct').resolves(newProductsMock);
    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductsMock.message);
  });

  afterEach(sinon.restore);
});