const _ = require("lodash");

const product = {
  productId: 123,
  productName: "Laptop",
  productPrice: 1500,
  inStock: true,
};

//transformez toutes les clés en snake_case

const snakeCased = _.mapKeys(product, (value, key) => _.snakeCase(key));

console.log(snakeCased);
