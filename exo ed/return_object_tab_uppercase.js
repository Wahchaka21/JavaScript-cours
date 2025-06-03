const { first } = require("lodash");

const utilisateur = {
  nom: "Bernier",
  prenom: "Edouard",
  contact: {
    email: "edouard@example.com",
    adresse: {
      ville: "Montbeliard",
      pays: "France",
    },
  },
};

//Crée une fonction récursive qui va parcourir l'objet et met toutes les valaeurs (uniquement de type string) en majuscule avec toUpperCase
function maj(obj) {
  let new_obj = { ...obj }; // Crée une copie de l'objet d'origine
  // Parcours de l'objet
  for (let key in new_obj) {
    // Vérifie si la valeur est une chaîne de caractères
    if (typeof new_obj[key] === "string") {
      // Met la valeur en majuscule
      new_obj[key] = new_obj[key].toUpperCase();
      // Vérifie si la valeur est un objet et n'est pas null
    } else if (typeof new_obj[key] === "object" && new_obj[key] !== null) {
      // Appelle la fonction récursivement pour traiter les objets imbriqués
      new_obj[key] = maj(new_obj[key]);
    }
  }
  return new_obj;
}
console.log(maj(utilisateur));
console.log("--------------------------------------------------");

//pareil mais avec un tableau d'objets, l'idée c'est quelle puisse parcourir le tableau et faire la même chose avec une boucle for
const utilisateur2 = {
  nom: "Bernier",
  prenom: "Edouard",
  contact: {
    email: "edouard@example.com",
    adresse: {
      ville: "Montbeliard",
      pays: "France",
    },
  },
  tab: [
    {
      firstname: "luc",
    },
  ],
};

let maj2 = function (obj) {
  if (typeof obj == "string") {
    return obj.toUpperCase();
  } else if (typeof obj === "object" && !Array.isArray(obj) && obj != null) {
    var new_obj = {};
    for (let item in obj) {
      new_obj[item] = maj2(obj[item]);
    }
    return new_obj;
  } else if (typeof obj === "object" && Array.isArray(obj) && obj != null) {
    return obj.map((e) => {
      return maj2(e);
    });
  } else return obj;
};
console.log(maj2(utilisateur2));
