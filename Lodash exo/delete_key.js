const _ = require("lodash");

const user = {
  id: 1,
  name: "Jean",
  age: 30,
  email: "jean@example.com",
  password: "secret",
};

let new_user = _.omit(user, ["password"]);
console.log(new_user);
