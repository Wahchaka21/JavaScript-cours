/*Fichier preparation.js
Consigne :
- Crée une fonction preparerCommande(numeroCommande, callback).
- Reçoit le numéro généré précédemment et l'affiche.
- Simule la préparation avec un délai.
- Passe à la fonction suivante via callback une fois la préparation terminée. */
let preparationOrder = function (number_order, callback) {
  console.log(`[PREPARATION] Préparation commande N°${number_order}...`);
  setTimeout(() => {
    console.log(`[PREPARATION] Commande N°${number_order} prête !`);
    callback(null, number_order);
  }, 2000);
};

module.exports = preparationOrder;
