const _ = require("lodash");

const resultat = commande
  .groupBy("clientId") // ❗ Erreur ici si on n’utilise pas Lodash ou une lib étendue : groupBy n’existe pas nativement ! Cette ligne suppose que tu utilises une lib ou un polyfill où groupBy est disponible directement sur les arrays
  .map((cmds, clientId) => ({
    // Pour chaque groupe de commandes par clientId
    clientId: +clientId, // Conversion du clientId (clé) en nombre
    categories: _(cmds) // On transforme la liste de commandes du client en un objet Lodash (_)
      .groupBy("categorie") // On regroupe les produits par catégorie (Livres, Papeterie, etc.)
      .map((prods, categorie) => ({
        // Pour chaque catégorie
        categorie, // On garde le nom de la catégorie
        produits: _(prods) // On reprend les produits de cette catégorie
          .groupBy("produit") // On les regroupe par nom de produit
          .map((p, produit) => ({
            // Pour chaque produit identique (ex: "Stylo Rouge")
            produit,
            quantite: _.sumBy(p, "quantite"), // On additionne toutes les quantités de ce produit
          }))
          .value(), // On extrait le résultat Lodash en tableau JavaScript
      }))
      .value(), // On extrait le tableau final des catégories
  }))
  .value();

console.log(JSON.stringify(resultat, null, 4)); // On affiche le résultat joliment au format JSON

const resultats = _.map(
  // On crée un tableau de résultats
  _.groupBy(commandes, "clientId"), // Regroupe les commandes par clientId
  (cmds, clientId) => ({
    // Pour chaque client
    clientId: Number(clientId), // Convertit l’ID en nombre
    categories: _.map(
      // Crée un tableau de catégories
      _.groupBy(cmds, "categorie"), // Regroupe les commandes du client par catégorie
      (produits, categorie) => ({
        // Pour chaque catégorie
        categorie,
        produits: _.map(
          // Crée un tableau de produits
          _.groupBy(produits, "produit"), // Regroupe les produits par nom
          (p, produit) => ({
            // Pour chaque produit
            produit,
            quantite: _.sumBy(p, "quantite"), // Additionne les quantités
          })
        ),
      })
    ),
  })
);
// Ce bloc fait exactement la même chose que le précédent, mais en version plus claire et plus sûre

const groupedBy = _.groupBy(commandes, "clientId"); // Regroupe les commandes par client
let tabs = []; // Stocke les résultats finaux

for (let item in groupedBy) {
  // Pour chaque client (item = clientId)
  let cat = _.groupBy(groupedBy[item], "categorie"); // Regroupe les commandes par catégorie
  let catRes = []; // Stocke les catégories de ce client

  for (let itemIn in cat) {
    // Pour chaque catégorie
    let products = _.groupBy(cat[itemIn], "produit"); // Regroupe les produits
    let productsRes = []; // Stocke les résultats des produits

    for (let itemProd in products) {
      // Pour chaque produit
      console.log(itemProd, _.sumBy(products[itemProd], "quantite"));
      productsRes.push({
        produit: itemProd,
        quantite: _.sumBy(products[itemProd], "quantite"),
      });
    }

    catRes.push({ categorie: itemIn, produits: productsRes });
  }

  tabs.push({ clientId: item, categories: catRes });
}

console.log(JSON.stringify(tabs, null, 4)); // Affiche le résultat final
