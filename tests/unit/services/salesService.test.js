const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

const mock = require('../mocks/salesMock');

describe('Tests sales from service layer', function () {
  it('01 - Test if returns sales by id', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(mock.saleOne);

    const result = await salesService.getSalesById(1);

    expect(result.message).to.be.deep.equal(mock.saleOne);
    expect(result.type).to.be.deep.equal(null);

  });

  // it('02 - Test if returns error when does not exist searched sale by id', async function () {
  //   sinon.stub(salesModel, 'getSalesById').resolves(mock.saleOne);

  //   const idToFind = 999;

  //   const result = await salesService.getSalesById(idToFind);

  //   expect(result.message).to.be.deep.equal(mock.saleOne);
  //   expect(result.type).to.be.deep.equal(null);

  // });

  afterEach(sinon.restore);
})
