const _ = require("lodash");
//Exercice 5 : Fusionner des tableaux d'objets selon une clé
const infos = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const scores = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
];
// On utilise `map` pour parcourir chaque élément du tableau `infos`
const merged = _.map(infos, (info) => {
  const scoreObj = _.find(scores, { id: info.id });
  return _.merge({}, info, scoreObj);
});
console.log(merged);
console.log("-----------------------------");

// =============================================================== maintenant sans lodash l'enfer :D
const infos2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const scores2 = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
];

function enfer(infos, scores) {
  const result = [];
  for (let i = 0; i < infos.length; i++) {
    const info = infos[i];
    let truc = null;
    for (let j = 0; j < scores.length; j++) {
      if (scores[j].id === info.id) {
        truc = scores[j];
        break;
      }
    }
    const merged = { ...info, ...truc };
    result.push(merged);
  }
  return result;
}
console.log(enfer(infos2, scores2));
