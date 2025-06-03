let generateOrder = function (product, callback) {
  console.log(`[COMMANDE] Produit commandé : ${product}`);
  let number_order = Math.floor(Math.random() * 10000);
  console.log(`[COMMANDE] Numéro généré : ${number_order}`);
  callback(null, number_order);
};

let preparationOrder = function (number_order, callback) {
  console.log(`[PREPARATION] Préparation commande N°${number_order}...`);
  setTimeout(() => {
    console.log(`[PREPARATION] Commande N°${number_order} prête !`);
    callback(null, number_order);
  }, 2000);
};

let shippingOrder = function (number_order, adress, callback) {
  console.log(
    `[LIVRAISON] Commande N°${number_order} en cours de livraison à ${adress}...`
  );
  setTimeout(() => {
    console.log(`[LIVRAISON] Commande N°${number_order} livrée à ${adress}.`);
    callback(null, number_order);
  }, 2000);
};

let createOrder = function () {
  generateOrder("Durum Adana Harissa", function (err, value_number) {
    if (err) {
      console.error(err.message);
      return err;
    }
    preparationOrder(value_number, function (err, value_preparation) {
      if (err) {
        console.error(err);
        return err;
      }
      shippingOrder(
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
