/* 
Simulation de commandes en cascade
Objectifs :
- Maîtriser les callbacks imbriqués (nested callbacks).
- Apprendre à gérer plusieurs opérations séquentielles en Node.js.
- Comprendre la gestion des erreurs avec plusieurs callbacks.

Fichier principal index.js
Consigne :

- Appelle les fonctions précédentes en cascade avec des callbacks imbriqués.
- Fournis un produit et une adresse en paramètre initial.
- Gère correctement les erreurs à chaque étape.

*/
const commande = require("./commande");
const preparation = require("./preparation");
const livraison = require("./livraison");

let createOrder = function () {
  commande("Cheese Burger", function (err, value_number) {
    if (err) {
      console.error(err.message);
      return err;
    }
    preparation(value_number, function (err, value_preparation) {
      if (err) {
        console.error(err);
        return err;
      }
      livraison(
        value_number,
        "SEM Numerica, Montbéliard",
        function (err, value_shipping) {
          if (err) {
            console.error(err);
            return err;
          } else {
            console.log(`[SUCCES] Etat final : Livraison réussie`);
          }
        }
      );
    });
  });
};

createOrder();
