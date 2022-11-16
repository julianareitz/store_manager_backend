const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../models/productModel');

const productsMock = require('./productsModelMock');

const connection = require('../../../src/models/connection');

describe('Tests products from model layer', function () {
  
  afterEach(sinon.restore);

  it.only('01 - Test if returns all products', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock.productsMock]);
    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(productsMock.productsMock);
  });

  it('02 - Test if returns product by id', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock[1]]);
    const result = await productModel.findById(1);
    expect(result).to.be.deep.equal(productsMock[1]);
  });
});