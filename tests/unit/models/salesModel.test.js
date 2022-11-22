const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');

const mock = require('../mocks/salesMock');

describe('Tests sales from model layer', function () {
  
  it('01 - Test if return sale by id', async function () {
    sinon.stub(connection, 'execute').resolves([mock.saleOne]);
    
    const result = await salesModel.getSalesById(1);

    expect(result).to.be.deep.equal(mock.saleOne);
  });

  afterEach(sinon.restore);
});
