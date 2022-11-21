const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productController = require('../../../src/controllers/productController')

const mock = require('../mocks/productsMock');

describe('Tests products from controller layer', function () {

  it('01 - Test if returns all products', async function () {
    const res = {};
    const req = { body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAllProducts').resolves(mock.allProductsMock);
    await productController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProductsMock);
  });

  it('02 - Test if returns product by id', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves(mock.firstProduct);
    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.firstProduct.message);
  });


  // it('03 - Test if delete product by id', async function () {
  //   const res = {};
  //   const req = { params: { id: 1 } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'deletedProduct').resolves(mock.);
  //   await productController.deletedProduct(req, res);

  //   expect(res.status).to.have.been.calledWith(204);
  //   expect(res.json).to.have.been.calledWith(mock.message);
  // });

  // it('03 - Test if returns error message if not found id', async function () {
  //   const res = {};
  //   const req = { params: { id: 500 } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'getProductById').resolves(notFoundProductMock);
  //   await productController.getProductById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith({ message: notFoundMessageMock });
  // });

  // it('04 - Test if insert a new product', async function () {
  //   const res = {};
  //   const req = { body: { name: "Laço da verdade da Mulher Maravilha" } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'newProduct').resolves(newProductsMock);
  //   await productController.getProductById(req, res);

  //   expect(res.status).to.have.been.calledWith(201);
  //   expect(res.json).to.have.been.calledWith(newProductsMock.message);
  // });

  afterEach(sinon.restore);
});