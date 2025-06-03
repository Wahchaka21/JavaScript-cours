const _ = require("lodash");

const config = {
  maxUsers: "50",
  enableFeatureX: "true",
  timeoutSeconds: "30",
};

//Convertissez-le en un tableau d'objets où les clés deviennent name en kebab-case, et les valeurs numériques ou booléennes sont correctement parsées :
const result = _.map(config, (value, key) => {
  //on parcourt chaque paire clé/valeur de l'objet avec map
  const name = _.kebabCase(key); // transformation de clé en kebabCase
  let convert = _.toNumber(value); //convertit les chaînes numérique en nombre
  if (_.isNaN(convert)) {
    //si convert est NaN (si la conversion en nombre à échouer), retourne NaN si c'est pas un nombre valide
    convert = value === "true" ? true : value === "false" ? false : value; // si la valeur est true, on assigne true, sinon on assigne false
  }
  return { name, value: convert };
});
console.log(result);
