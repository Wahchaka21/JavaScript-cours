const _ = require("lodash");
//Exercice 8 : Calculer la moyenne d’une propriété dans un tableau d'objets

const employees = [
  { id: 1, salary: 3000 },
  { id: 2, salary: 4500 },
  { id: 3, salary: 5000 },
];
//Calculez la moyenne des salaires avec Lodash.
let avg = _.meanBy(employees, "salary");
console.log(avg);
