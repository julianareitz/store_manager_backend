const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');

const { allProductsMock } = require('../mocks/productsMock');

describe('Tests products from model layer', function () {

  it('01 - Test if returns all products', async function () {
    sinon.stub(connection, 'execute' ).resolves([[allProductsMock]]);
    
    const result = await productsModel.findAll();

    expect(result).to.be.deep.equal([allProductsMock]);
  });

  // it('02 - Test if returns product by id', async function () {
  //   sinon.stub(connection, 'execute').resolves([[allProductsMock[0]]]);
    
  //   const result = await productsModel.findById(1);

  //   expect(result).to.be.deep.equal(allProductsMock[0]);
  // });

  // it('04 - Test if insert a new product', async function () {
  //   sinon.stub(connection, 'execute').resolves(4);
  //   const result = await productsModel.newProduct({ name: "Laço da verdade da Mulher Maravilha" });
  //   expect(result).to.be.deep.equal({ name: "Laço da verdade da Mulher Maravilha" });
  // });

  afterEach(sinon.restore);
});