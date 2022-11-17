const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../models/productModel');
const productService = require('../../../src/services/productService');

const {
  allProductsMock,
} = require('../productsMock');

describe('Tests products from service layer', function () {

  it('01 - Test if returns all products', async function () {
    sinon.stub(productModel, 'findAll').resolves(allProductsMock);
    const result = await productService.findAll();
    expect(result.message).to.be.deep.equal(allProductsMock);
  });

  it('02 - Test if returns product by id', async function () {
    sinon.stub(productModel, 'findById').resolves(allProductsMock[01]);
    const result = await productService.findById(0);
    expect(result.message).to.be.deep.equal(allProductsMock[01]);
  });

  it('03 - Test if returns error message if not found id', async function () {
    sinon.stub(productModel, 'findAll').resolves(allProductsMock);
    const result = await productModel.findById(500);
    expect(result.message).to.be.deep.equal(allProductsMock.notFoundMessageMock);
  });

  it('04 - Test if insert a new product', async function () {
    const lacoMulherMaravilha = { name: "Laço da verdade da Mulher Maravilha" };

    sinon.stub(productModel, 'newProduct').resolves(4);
    const result = await productModel.newProduct(lacoMulherMaravilha);
    expect(result).to.be.deep.equal(lacoMulherMaravilha);
  });

  afterEach(sinon.restore);
});