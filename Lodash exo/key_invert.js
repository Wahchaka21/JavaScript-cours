const _ = require("lodash");
//Exercice 7 : Inverser clé-valeur dans un objet

const countryCodes = {
  FR: "France",
  US: "United States",
  CA: "Canada",
};
//Créez un nouvel objet où les clés et les valeurs sont inversées :
console.log(_.invert(countryCodes));
