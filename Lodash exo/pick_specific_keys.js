const _ = require("lodash");

const user = {
  id: 1,
  name: "jean",
  age: 30,
  email: "jean@example.com",
  password: "secret",
};

console.log(_.pick(user, ["id", "name", "email"]));
