const _ = require("lodash");

//Exercice 4 : Grouper des objets selon une propriété
//Considérez ce tableau d'objets :
const students = [
  { name: "John", class: "Math", grade: 90 },
  { name: "Alice", class: "Physics", grade: 85 },
  { name: "Bob", class: "Math", grade: 75 },
  { name: "Eve", class: "Physics", grade: 95 },
];

//Regroupez les étudiants selon leur classe. Vous devriez obtenir une structure comme ceci :
const groupedByClass = _.groupBy(students, "class");
console.log(groupedByClass);
