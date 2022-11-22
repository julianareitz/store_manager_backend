const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const saleController = require('../../../src/controllers/salesController')

const mock = require('../mocks/salesMock');

describe('Tests sales from controller layer', function () {

  it('01 - Test if returns all sales', async function () {
    const res = {};
    const req = { body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAllSales').resolves(mock.allsalesMock);
    await saleController.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allsalesMock);
  });

  // it('02 - Test if returns sale by id', async function () {
  //   const res = {};
  //   const req = { params: { id: 1 } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(salesService, 'getsaleById').resolves(mock.firstsale);
  //   await saleController.getsaleById(req, res);

  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith(mock.firstsale.message);
  // });

  

  // it('03 - Test if delete sale by id', async function () {
  //   const res = {};
  //   const req = { params: { id: 1 } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(salesService, 'deletedsale').resolves(mock.deletedsale);
  //   await saleController.deletedsale(req, res);

  //   expect(res.status).to.have.been.calledWith(204);
  //   expect(res.json).to.have.been.calledWith(mock.deletedsale);
  // });

  // it('04 - Test if insert a new sale', async function () {
  //   const res = {};
  //   const req = { body: { name: "Laço da verdade da Mulher Maravilha" } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(salesService, 'newsale').resolves(mock.newsaleServiceResponse);
  //   await saleController.newsale(req, res);
  
  //   expect(res.status).to.have.been.calledWith(201);
    
  //   expect(res.json).to.have.been.calledWith(mock.newsaleServiceResponse.message);
  // });


  // it('05 - Test if update sale', async function () {
  //   const res = {};
  //   const req = {
  //     body: { name: mock.updatedsale.name },
  //     params: { id: mock.updatedsale.id }
  //   };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(salesService, 'updatesale').resolves(mock.newsaleServiceResponse);
  //   await saleController.updatesale(req, res);
  
  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith(mock.newsaleServiceResponse.message);
  // });

  // it('03 - Test if returns error message if not found id', async function () {
  //   const res = {};
  //   const req = { params: { id: 999 } };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(salesService, 'getsaleById').resolves(mock.notFoundsaleMock);
  //   await saleController.getsaleById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith({ message: mock.notFoundMessageMock });
  // });


  afterEach(sinon.restore);
});