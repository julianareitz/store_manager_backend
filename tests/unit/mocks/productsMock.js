/*-------------------------- Products --------------------------*/
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

const deletedProduct = `The product with id: 1 has been secessfull deleted!`;

const updatedProduct = { name: 'martelo Mjolnir', id:1 };

const notFoundMessageMock = 'Product not found';

const allProductsReturnMock = { message: allProductsMock, type: null };

const firstProduct = { type: null, message: allProductsMock[0] };

const notFoundProductMock = { type: 'INVALID_VALUE', message: 'Product not found' };

const newProductMock = { name: 'Laço da verdade da Mulher Maravilha', id: 4 };


module.exports = {
  allProductsMock,
  newProductsMock,
  notFoundMessageMock,
  firstProduct,
  allProductsReturnMock,
  notFoundProductMock,
  newProductMock,
  deletedProduct,
  updatedProduct,
};