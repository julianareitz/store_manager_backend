const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../models/productModel');

const productsMock = require('./productsModelMock');

const connection = require('../../models/connection');

describe('Tests products from model layer', function () {

  afterEach(sinon.restore);

  it('01 - Test if adds new product', async function () {
    sinon.stub(connection, 'execute').resolves([newProductsMock[03]]);
    const result = await productModel.findById(04);
    expect(result).to.be.deep.equal(productsMock[03]);
  })
});