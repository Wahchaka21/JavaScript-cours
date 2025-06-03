//regrouper les info des achats pour chaque client (clientId 1 et clientId 2) en créant une nouvelle fonction
//étape 1 : parcourir chaque client du tableau
//étape 2 : pour chaque commande vérifier si le produit est déjà enregistrer pour ce client
//étape 3 : si le client est déjà dans le tableau resultat, alors vérifier si le produit est déjà enregistré pour ce tableau
//étape 4 : si le produit existe déjà, on ajoute la quantité à celle existant, si le produit n'existe pas on ajoute ce nouveau produit avec sa quantité initiale
//étape 5 : si le client n'existe pas encore dans le tableau resultat, on l'ajoute directement avec le produit et la quantité initiale.
// Liste des commandes passées par différents clients, contenant leur ID, le nom du produit, et la quantité achetée
const commandes = [
  { clientId: 1, produit: "livre", quantite: 2 },
  { clientId: 2, produit: "stylo", quantite: 5 },
  { clientId: 1, produit: "livre", quantite: 3 },
  { clientId: 1, produit: "stylo", quantite: 1 },
  { clientId: 2, produit: "livre", quantite: 4 },
  { clientId: 2, produit: "stylo", quantite: 2 },
];

// Fonction qui regroupe les achats par client en additionnant les quantités pour chaque produit
function regrouperCommandes(commandes) {
  let resultat = []; // tableau final qui va contenir les clients avec leurs produits groupés
  for (let i = 0; i < commandes.length; i++) {
    // on parcourt chaque commande une par une
    let commande = commandes[i]; // on récupère la commande actuelle
    let clientTrouve = false; // booléen pour savoir si le client est déjà dans le tableau résultat

    for (let j = 0; j < resultat.length; j++) {
      // on parcourt les clients déjà enregistrés
      if (resultat[j].clientId === commande.clientId) {
        // si on trouve le même clientId
        clientTrouve = true; // on marque qu'on a trouvé le client
        let produitTrouve = false; // booléen pour savoir si le produit est déjà enregistré pour ce client

        for (let k = 0; k < resultat[j].produits.length; k++) {
          // on parcourt les produits du client
          if (resultat[j].produits[k].produit == commande.produit) {
            // si le produit est déjà là
            resultat[j].produits[k].quantite += commande.quantite; // on ajoute la quantité
            produitTrouve = true; // on note que le produit est trouvé
          }
        }

        if (!produitTrouve) {
          // si le produit n'existe pas encore pour ce client
          resultat[j].produits.push({
            // on l'ajoute avec sa quantité initiale
            produit: commande.produit,
            quantite: commande.quantite,
          });
        }
      }
    }

    if (!clientTrouve) {
      // si le client n'a pas encore été enregistré
      resultat.push({
        // on le crée avec son premier produit
        clientId: commande.clientId,
        produits: [
          {
            produit: commande.produit,
            quantite: commande.quantite,
          },
        ],
      });
    }
  }
  return resultat; // on retourne le tableau final regroupé
}

// Affiche le résultat dans la console en affichant tout même les objets imbriqués
console.dir(regrouperCommandes(commandes), { depth: null });

//ON VA ESSAYER D'EXPLIQUER L'INFERNAL CODE DE CE MATIN

//On commence par cette variable, la variable commandes qui est un tableau regroupant toutes les commandes (wahou perspicace le bg tu me diras, et je le sais), et chaque commande est un objet ayant pour propriété l'ID du client qui a passé la commande, la catégorie du produit qu'il a acheté, le produit qu'il a acheté ainsi que sa quantité :

const commandes2 = [
  {
    clientID: 1,
    produit: "Livre Javascript",
    categorie: "Livres",
    quantite: 2,
  },
  { clientID: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 3 },
  {
    clientID: 2,
    produit: "Livre Javascript",
    categorie: "Livres",
    quantite: 1,
  },
  { clientID: 1, produit: "Cahier", categorie: "Papeterie", quantite: 4 },
  { clientID: 2, produit: "Stylo Bleu", categorie: "Papeterie", quantite: 2 },
  { clientID: 2, produit: "Livre Node.js", categorie: "Livres", quantite: 3 },
  { clientID: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 1 },
];

//Le problème c'est que c'est pas hyper lisible, du coup on veut créer une fonction à base de boucles pour faire un affichage basé sur les produits que le client a acheté, qui se présentera sous cette forme :
//[{
//  ID du client :
//  Catégories : [
//      {
//      Catégorie 1 où il a acheté des trucs :
//      Produits acheté de cette catégorie : [
//          {nom du produit acheté, quantité achetée}
//          ]
//      }
//      {
//      Catégorie 2 où il a acheté des trucs :
//      Produits acheté de cette catégorie : [
//          {nom du produit acheté, quantité achetée}
//          ]
//      }
//      ]
//}]
//La difficulté est qu'on a beaucoup de tableaux et d'objets, je vais essayer d'expliquer au mieux c'est pas simple donc va falloir se focus et revenir ici pour bien voir la structure que l'on veut, et je vous conseille de lire par indentation et pas par ligne, donc de suivre la petite ligne verticale pour voir ce qu'il se passe quand on rentre pas dans la boucle, et y aller par niveaux comme ça, voici le monstre :

//La fonction regrouperCommandes qui prend en argument un tableau
function regrouperCommandes(tab) {
  //On créé tout d'abord la variable tableau qui aura notre résultat voulu
  let resultat = [];
  //Et on créé une boucle pour parcourir le tableau en argument, grand classique désormais
  for (i = 0; i < tab.length; i++) {
    //On créé une variable booléenne pour vérifier si le client existe déjà dans le tableau résultat que l'on créé
    let clientExists = false;
    //Et on créé une variable commande qui remplacera tous les tabs[i], pour que ce soit plus lisible et compréhensible, comme ça on voit bien quand on se réfère au tableau de commandes et non à celui de résultat
    let commande = tab[i];
    //On parcourt notre tableau resultat, pour voir si le client y existe déjà. Comme il est imbriqué dans la boucle for qui parcourt le tableau commandes, ça veut dire que pour chaque commande, il va entièrement parcourir le tableau résultat pour voir si le client y existe déjà :
    for (j = 0; j < resultat.length; j++) {
      //On créé la condition où effectivement, le client existe déjà à la position j dans notre tableau résultat
      if (resultat[j].clientID == commande.clientID) {
        //Vu qu'on l'a trouvé, on passe notre variable booléenne à true
        clientExists = true;
        //Quand on se réfère à notre structure de tableau, maintenant que l'on a le même client, on se rend compte que la prochaine propriété de la commande que l'on doit trouver est la catégorie du produit, donc via le même système de variable on créé un booléen qui attestera de l'existence ou non de la catégorie de produit dans notre tableau résultat :
        let categorieExists = false;
        //Vu que notre client est déjà dans notre tableau résultat, on sait que la catégorie du produit est stockée dans un tableau "categories" (rechecker au dessus si besoin), donc on va parcourir ce tableau catégories pour voir si la catégorie de la commande est déjà entrée dans celui-ci ou non. Comme la précédente, elle est imbriquée dans la boucle for qui parcourt le tableau résultat, ce qui veut dire qu'il va vérifier toutes les catégories pour ce client bien précis
        //On parcourt donc le tableau categories du client à la position j du tableau résultats, ce qui nous donne :
        for (let k = 0; k < resultat[j].categories.length; k++) {
          //On recréé une condition sur le modèle précédent où effectivement, la catégorie existe déjà à la position k du tableau catégories du client j du tableau résultats
          if (resultat[j].categories[k].categorie == commande.categorie) {
            //On passe donc notre variable à true comme précédemment
            categorieExists = true;
            //Et maintenant que l'on a la catégorie du produit, il faut qu'on cherche si le client a déjà acheté ce produit de cette catégorie précédemment, donc on recréé comme avant une variable qui attestera de la présence ou non de ce produit dans le tableau résultat
            let productExists = false;
            //On a donc notre client à la position j, qui possède déjà la catégorie du produit à la position k du tableau catégories, et avec notre structure on sait que produits est aussi un tableau, donc on refait la même technique pour le parcourir.
            //On parcourt donc le tableau produits qui est contenu dans le tableau categories à la position k qui est lui même contenu dans le tableau du client j :
            for (
              let l = 0;
              l < resultat[j].categories[k].produits.length;
              l++
            ) {
              //On recréé une condition pour voir si le produit existe bien à la position l du tableau produits :
              if (
                resultat[j].categories[k].produits[l].produit ==
                commande.produit
              ) {
                //Effectivement, il est là, donc on passe notre variable à true pour attester de sa présence
                productExists = true;
                //Et comme le produit existe déjà, on ajoute juste la quantité achetée dans cette commande à celles achetées lors des précédentes qui sont déjà dans le tableau résultat :
                resultat[j].categories[k].produits[l].quantite +=
                  commande.quantite;
              }
            }
            //Le produit n'existe pas dans sa catégorie :
            if (!productExists) {
              //Alors comme pour les autres, on le push, et on peut encore voir comparé à ceux d'avant que seul le produit et sa quantité sont push, car le client et la catégorie existe déjà
              resultat[j].categories[k].produits.push({
                produit: commande.produit,
                quantite: commande.quantite,
              });
            }
          }
        }
        //La catégorie n'existe pas, néanmoins le client existe, il est à la position j, donc on va push la catégorie, le produit et la quantité acheté dans le tableau catégories du client j dans la structure que l'on veut, on peut même remarquer par rapport au if d'en dessous que c'est exactement la même chose, mais avec l'ID du client en moins vu qu'il existe déjà
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
    //Si notre variable qui atteste de la présence du client dans notre tableau n'est pas à true, on push le client, sa catégorie de produit, son produit acheté et sa quantité dans le tableau résultat dans la structure d'apparence que l'on désirait :
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
  //On return notre tableau resultat pour mettre fin à la fonction
  return resultat;
}

//Comme il y a beaucoup d'éléments imbriqués, le console.log ne pourra pas afficher tout le tableau. Pour se faire, on va utiliser un console.dir, qui fonctionne exactement pareil, sauf qu'il a en plus un argument "depth" qui permet de modifier la profondeur d'imbrication que l'on veut voir. Je vous invite à la modifier pour que vous voyer comment ça impacte le résultat. (Si vous mettez null, console.dir affichera tous les niveaux d'imbrications qu'importe leur nombre)
console.dir(regrouperCommandes(commandes2), { depth: 5 });
