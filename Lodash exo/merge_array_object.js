const _ = require("lodash");
//excercice 10
//Normaliser un tableau d’objets par ID

const users = [
  { id: "user1", name: "Alice", age: 28 },
  { id: "user2", name: "Bob", age: 35 },
];
//Transformez-le en un objet normalisé indexé par ID :
const users_indexed = _.keyBy(users, "id");
const usr_final = _.mapValues(users_indexed, function (user) {
  return _.omit(user, "id");
});
console.log(usr_final);
console.log(
  "-------------------------------------------------------------------------------"
);

//la même sans lodash :DDDD
const users2 = [
  { id: "user1", name: "Alice", age: 28 },
  { id: "user2", name: "Bob", age: 35 },
];
function hellV2(obj, table) {
  let obj = {};
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (table.indexOf(keys[i]) == -1) {
      obj[keys[i]] = object[keys[i]];
    }
  }
  return obj;
}

function hell(table, key) {
  let obj = {};
  for (let i = 0; i < table.length; i++) {
    let item = table[i];
    let id = item.id;
    obj[id] = hellV2(item, ["id"]);
  }
  return obj;
}
hell(users2, "id");
