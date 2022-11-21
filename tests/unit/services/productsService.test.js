const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const mock = require('../mocks/productsMock');

describe('Tests products from service layer', function () {

  it('01 - Test if returns all products', async function () {
    sinon.stub(productsModel, 'findAll').resolves(mock.allProductsMock);
    const result = await productsService.getAllProducts();
    
    expect(result).to.be.deep.equal(mock.allProductsMock);
  });
  
  it('02 - Test if returns product by id', async function () {
    sinon.stub(productsModel, 'findById').resolves(mock.allProductsMock[0]);

    const result = await productsService.getProductById(1);

    expect(result.message).to.be.deep.equal(mock.allProductsMock[0]);
  });

  it('03 - Test if delete product by id', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves(mock.deletedProduct);

    const result = await productsService.deleteProduct(1);

    expect(result.message).to.be.deep.equal(mock.deletedProduct);
  });

  it('04 - Test if update product', async function () {
    sinon.stub(productsModel, 'updateProduct').resolves();

    const result = await productsService.updateProduct(mock.updatedProduct);

    expect(result.message).to.be.deep.equal(mock.updatedProduct);
  });

  // it('03 - Test if returns error message if not found id', async function () {
  //   sinon.stub(productsModel, 'findAll').resolves(allProductsMock);
  //   const result = await productsModel.findById(500);
  //   expect(result.message).to.be.deep.equal(notFoundMessageMock);
  // });

  // it('04 - Test if insert a new product', async function () {
  //   const lacoMulherMaravilha = { name: "Laço da verdade da Mulher Maravilha" };

  //   sinon.stub(productsModel, 'newProduct').resolves(4);
  //   const result = await productsModel.newProduct(lacoMulherMaravilha);
  //   expect(result).to.be.deep.equal(lacoMulherMaravilha);
  // });

  afterEach(sinon.restore);
});