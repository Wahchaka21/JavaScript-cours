// On a une liste de commandes. Chaque commande dit qui a acheté quoi, dans quelle catégorie, et combien.
const commande = [
  {
    clientID: 1, // Le client numéro 1
    produit: "Livre Javascript", // Il a acheté un livre sur Javascript
    categorie: "Livres", // C'est dans la catégorie "Livres"
    quantite: 2, // Il en a pris 2
  },
  { clientID: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 3 },
  {
    clientID: 2, // Le client numéro 2
    produit: "Livre Javascript", // Lui aussi a acheté un livre sur Javascript
    categorie: "Livres",
    quantite: 1, // Mais il en a pris 1 seul
  },
  { clientID: 1, produit: "Cahier", categorie: "Papeterie", quantite: 4 },
  { clientID: 2, produit: "Stylo Bleu", categorie: "Papeterie", quantite: 2 },
  { clientID: 2, produit: "Livre Node.js", categorie: "Livres", quantite: 3 },
  { clientID: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 1 },
];

// On veut organiser tout ça pour que chaque client ait sa propre liste de catégories et de produits.
function order2(tab) {
  let resultat = []; // Ici, on va ranger tout bien organisé

  for (i = 0; i < tab.length; i++) {
    // On regarde chaque commande une par une
    let clientExists = false; // On vérifie si on a déjà vu ce client
    let commande = tab[i]; // C'est la commande qu'on est en train de regarder

    // On parcourt le tableau "resultat" pour voir si ce client est déjà là
    for (j = 0; j < resultat.length; j++) {
      if (resultat[j].clientID == commande.clientID) {
        // Si on trouve le client :
        clientExists = true; // On dit qu'on l'a trouvé

        let categorieExists = false; // On vérifie si la catégorie existe déjà pour ce client

        // On regarde toutes les catégories de ce client
        for (let k = 0; k < resultat[j].categories.length; k++) {
          if (resultat[j].categories[k].categorie == commande.categorie) {
            // Si on trouve la bonne catégorie :
            categorieExists = true; // On dit qu'on l'a trouvée

            let productExists = false; // On vérifie si le produit est déjà là

            // On regarde tous les produits de cette catégorie
            for (
              let l = 0;
              l < resultat[j].categories[k].produits.length;
              l++
            ) {
              if (
                resultat[j].categories[k].produits[l].produit ==
                commande.produit
              ) {
                // Si le produit est déjà là, on ajoute juste la quantité
                productExists = true;
                resultat[j].categories[k].produits[l].quantite +=
                  commande.quantite;
              }
            }

            // Si le produit n'était pas là, on l'ajoute avec sa quantité
            if (!productExists) {
              resultat[j].categories[k].produits.push({
                produit: commande.produit,
                quantite: commande.quantite,
              });
            }
          }
        }

        // Si la catégorie n'était pas là, on l'ajoute avec le produit
        if (!categorieExists) {
          resultat[j].categories.push({
            categorie: commande.categorie,
            produits: [
              { produit: commande.produit, quantite: commande.quantite },
            ],
          });
        }
      }
    }

    // Si on n'a pas trouvé ce client, on le crée avec sa catégorie et son produit
    if (!clientExists)
      resultat.push({
        clientID: commande.clientID,
        categories: [
          {
            categorie: commande.categorie,
            produits: [
              { produit: commande.produit, quantite: commande.quantite },
            ],
          },
        ],
      });
  }

  // À la fin, on retourne tout bien organisé
  return resultat;
}

// On affiche le résultat dans la console pour voir ce qu'on a fait
console.dir(order2(commande), { depth: null });
