const allProductsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const newProductsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  },
  {
    "id": 4,
    "name": "Laço da verdade da Mulher Maravilha"
  }
];

notFoundMessageMock = 'Product not found';

const allProductsReturn = { type: null, message: products };

const productsReturn = { type: null, message: products[0] };

const notFoundProduct = { type: 'INVALID_VALUE', message: 'Product not found' };

const newProduct = { name: 'Laço da verdade da Mulher Maravilha', id: 4 };

const newProductReturn = { type: null, message: newProduct };


module.exports = {
  allProductsMock,
  newProductsMock,
  notFoundMessageMock,
  allProductsReturnMock,
  productsReturnMock,
  notFoundProductMock,
  newProductMock,
  newProductReturnMock,
};