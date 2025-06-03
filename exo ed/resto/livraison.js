/*Fichier livraison.js
Consigne :
- Crée une fonction livrerCommande(numeroCommande, adresseLivraison, callback).
- Affiche le numéro de commande reçu et l'adresse fournie.
- Simule la livraison avec un délai.
- Appelle le callback à la fin avec un message de succès. */
let shippingOrder = function (number_order, adress, callback) {
  console.log(
    `[LIVRAISON] Commande N°${number_order} en cours de livraison à ${adress}...`
  );
  setTimeout(() => {
    console.log(`[LIVRAISON] Commande N°${number_order} livrée à ${adress}.`);
    callback(null, number_order);
  }, 2000);
};

module.exports = shippingOrder;
