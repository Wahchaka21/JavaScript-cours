/* Consigne :
- Crée une fonction prendreCommande(produit, callback).
- Génère un numéro de commande aléatoire (nombre entier).
- Affiche la prise de commande.
- Passe ce numéro via callback à la fonction suivante. */
let generateOrder = function (product, callback) {
  console.log(`[COMMANDE] Produit commandé : ${product}`);
  let number_order = Math.floor(Math.random() * 10000);
  console.log(`[COMMANDE] Numéro généré : ${number_order}`);
  callback(null, number_order);
};

module.exports = generateOrder;
