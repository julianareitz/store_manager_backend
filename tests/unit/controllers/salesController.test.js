const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController')

const mock = require('../mocks/salesMock');

describe('Tests sales from controller layer', function () {

  it('01 - Test if returns all sales', async function () {
    const req = { body: {} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAllSales').resolves(mock.allsalesMock);
    await salesController.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allsalesMock);
  });

  it('02 - Tests if returns searched sale', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getSalesById').resolves({ type: null, message: mock.saleOne });
    await salesController.getSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.saleOne);
  })
  afterEach(sinon.restore);
});