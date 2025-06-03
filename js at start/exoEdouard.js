//garde les nombres pairs
//double-les
const nombres = [1, 2, 3, 4, 5, 6];

let new_nombres = []; //crée un tableau vide

for (let i = 0; i < nombres.length; i++) {
  // tant que i est inférieur à la longueur du tableau nombres
  let item = nombres[i]; // on récupère l'élément i du tableau
  if (item % 2 == 0) {
    // si l'élément est pair
    new_nombres.push(item * 2); // on le double et on l'ajoute au tableau new_nombres
  }
}
console.log(new_nombres);

//déclarer une fonction
function saluer(name) {
  console.log("Bonjour", name, "!");
}
saluer("sophie");
saluer("alice");

//faire nombre au carré, ici 4 donc on doit trouver 16
function carre(number) {
  // on déclare une fonction
  console.log(number * number); // on affiche le carré du nombre
}
carre(4); // on appelle la fonction avec le nombre 4

//faire une moyenne en déclarant une fonction
let numbers = [13, 18, 15, 19];

var numbers1 = [10, 8, 5, 19];

function getAVG(table) {
  let sum_avg = 0; // somme = 0
  let avg = 0; // moyenne = 0
  if (table && Array.isArray(table)) {
    //vérifie si table est un tableau et donc la protège
    for (let i = 0; i < table.length; i++) {
      // tant que i est inférieur à la longueur du tableau
      if (!isNaN(table[i]))
        // vérifie si l'élément est un nombre et le protège aussi dans ce cas la
        sum_avg += table[i]; // somme = somme + item
    }
    avg = sum_avg / table.length; // on divise la somme par la longueur du tableau
  }
  return avg; // on retourne la moyenne
}
let moyenne = getAVG(numbers); // on appelle la fonction getAVG avec le tableau numbers
console.log(moyenne);
let moyenne1 = getAVG(numbers1); // on appelle la fonction getAVG avec le tableau numbers
console.log(moyenne1);

//pour faire une fonction qui donne le nom complet d'un utilisateur
let user = {
  firstName: "Quentyn",
  lastName: "Petitjean",
  getFullName: function () {
    // on déclare une fonction getFullName
    console.log(this.firstName, this.lastName); // on affiche le nom et le prénom, this est pour faire référence à l'objet user
  },
};
user.getFullName(true); // on appelle la fonction getFullName sinon on aurait eu undefined undefined

function lancerFour(time, callback) {
  // on déclare une fonction lancerFour, time est le temps en secondes et callback est la fonction de rappel, callback est une fonction qui sera appelée après le temps écoulé
  console.log("je lance le four");
  setTimeout(() => {
    // on déclare une fonction setTimeout qui va attendre le temps donné en paramètre avant d'exécuter la fonction
    console.log("j'ai fini le four");
    callback(null, "j'ai fini"); // on appelle la fonction de rappel avec null pour l'erreur et "j'ai fini" pour le message
  }, time * 1000); // on multiplie le temps par 1000 pour le convertir en millisecondes
}

function jaiFini(message) {
  // on déclare une fonction jaiFini qui va afficher le message
  console.log("j'ai terminé, message :", message); // on affiche le message
}

lancerFour(2, jaiFini); // on appelle la fonction lancerFour avec 2 secondes et la fonction jaiFini comme callback
console.log("ok");

//supprimer un élément d'un tableau précis
var tabs = [
  { name: "Jean" },
  { name: "Luc" },
  { name: "Edouard" },
  { name: "Edouard" },
  { name: "Louis" },
];

function printName(tables) {
  tables.forEach((e) => {
    console.log(`name: ${e.name}`);
  });
}

let name_to_find = "Edouard";

function findIndexByName(tabs, name) {
  if (!tabs || !tabs.length) return -1;
  for (var i = 0; i < tabs.length; i++) {
    // console.log(tabs[i], i)
    if (tabs[i].name == name) {
      //  console.log("Ok trouvés à la position", i)
      return i;
    }
  }
  return -1;
}

printName(tabs);

function deleteEveryItemByName(tables, name_to_delete) {
  while (findIndexByName(tables, name_to_delete) != -1) {
    var index = findIndexByName(tables, name_to_delete);
    if (index > -1) {
      tables.splice(index, 1);
    }
  }
}
deleteEveryItemByName(tabs, name_to_find);
deleteEveryItemByName(tabs, "Louis");

console.log("-------------------------");

printName(tabs); //printName(tabs)

//crée une fonct removeElementAtIndex(tabs, index) qui suppr un éléménet à la positin donnée.
//tes la fonct en suppr l'élément à l'index 2 "Kiwi"

let fruits = ["pomme", "banane", "kiwi", "orange", "mangue"];

function removeElementAtIndex(tabs, index) {
  if (tabs && tabs.length && !isNaN(index) && index > -1)
    //pour protéger
    tabs.splice(index, 1);
  else console.debug("removeElementAtIndex : pas les bons arguments");
}
removeElementAtIndex(fruits, 2);
console.log(fruits);

//recoder splice...
//la fonction cds_splice permet de créer un nouveau tableau en supprimant un portion d'un tableau existant (tabs) à partir d'une position précise
function cda_splice2(tab, start, count) {
  //Deuxième version de slice avec les mêmes arguments
  let new_tab2 = []; //On recréé un tableau où l'on va copier les éléments que l'on veut garder
  let end = start + count; //On créé une variable end qui permettra de reprendre la copie après la suppression de tous les éléments, en créant un intervalle des indexs à supprimer qui commence à start et qui a un nombre count d'éléments
  for (let i = 0; i < tab.length; i++) {
    //La boucle qui se balade dans le tableau à copier comme avant
    if (i < start || i >= end) {
      //On vérifie que l'on est bien en dehors de l'intervalle d'éléments à supprimer
      new_tab2.push(tab[i]); //On copie les éléments dans le nouveau tableau
    }
  }
  return new_tab2; //On return avec notre nouveau tableau contenant tous les éléments que l'on voulait garder
}

//autre methode pour recoder splice
function cda_splice(tab, start, count) {
  //Reproduction de slice, tab est le tableau, start l'élément à supprimer, count le nbr d'éléments à supp
  let new_tab = []; //On va créer un nouveau tableau pour copier les éléments qu'on ne veut pas supprimer dedans
  let my_count = 0; //Variable pour bien supprimer le nombre d'éléments rentré
  let find = false; //Variable qui passe à true quand on trouve l'élément à supprimer
  for (let i = 0; i < tab.length; i++) {
    //Boucle qui permet de se balader dans notre tableau où l'on veut supprimer des éléments
    if (i != start && !find) {
      //On vérifie que l'index n'est pas égal à celui que l'on veut supprimer et que find est à false
      new_tab.push(tab[i]); //On copie l'élément dans le nouveau tableau
    } else {
      //On a trouvé l'élément à supprimer
      find = true; //find passe à true, vu que l'on a trouvé l'élément
      my_count++; //On incrémente my_count, car on supprime un élément
      if (my_count == count) {
        //On vérifie que le nombre d'éléments supprimés est bien égal au nombre d'éléments à supprimer avec count
        find = false; //On remet find à false pour pouvoir reprendre la copie d'éléments
      }
    }
  }
  return new_tab; //On return avec notre nouveau tableau contenant tous les éléments que l'on voulait garder
}

console.log("--------------------------");

//écrire une fonction sommeTableau(tab) qui retourne la somme des nombres contenus dans un tableau

const tabs3 = [1, 2, 3, 4]; //10
function sommeTableau(tab) {
  let somme = 0; //On initialise la variable somme à 0
  for (let i = 0; i < tab.length; i++) {
    //On parcourt le tableau
    somme += tab[i]; //On additionne chaque élément du tableau à la variable somme
  }
  return somme; //On retourne la somme
}
let result = sommeTableau(tabs3);
console.log("la somme est égale à ", result);
console.log("--------------------------");

//écrire une fonction filterPairs(tab) qui retourne un nouveau tableau contenant seulement les nombres pairs du tableau initial
function filterPairs(tables) {
  let new_tab3 = [];
  for (let i = 0; i < tables.length; i++) {
    if (tables[i] % 2 == 0) new_tab3.push(tables[i]);
  }
  return new_tab3;
}
filterPairs([1, 2, 3, 4, 5, 6]);
let isPair = filterPairs(tabs3);
console.log("les chiffres " + isPair + " sont pairs");

//écrire un fonction inverseTableau(tab) qui retourne un tableau inversé sans utiliser la méthode native .reverse()
console.log("--------------------------");

function inverseTableau(tables) {
  let new_tables = [];
  for (let i = tables.length - 1; i >= 0; i--) {
    new_tables.push(tables[i]);
  }
  return new_tables;
}
console.log(inverseTableau([10, 20, 30]));
console.log("--------------------------");

//écris une fonction rechercheElement(tab, element) qui retourne true si l'élément est dans le tableau, sinon false.
function rechercheElement(tab, element) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] == element) {
      return true;
    }
  }
  return false;
}
console.log(rechercheElement(["a", "b", "c"], "b"));

console.log("--------------------------");

//écris une fonction eliminerDoublons(tab) qui retourne un tableau sans doublons
function eliminerDoublons(tables) {
  let new_tab4 = [];
  for (let i = 0; i < tables.length; i++) {
    let has_doublon = false;
    for (let j = 0; j < new_tab4.length; j++) {
      if (new_tab4[j] == tables[i]) {
        has_doublon = true;
      }
    }
    if (!has_doublon) new_tab4.push(tables[i]);
  }
  return new_tab4;
}
console.log(eliminerDoublons([1, 2, 2, 3, 4, 4]));

console.log("--------------------------");

//écris une fonction elementsCommuns(tab1, tab2) qui renvoie un nouveau tableau contenant uniquement les éléments communs aux deux tableaux, sans doublons
function elementsCommuns(tables_1, tables_2) {
  // Je declare le tableau a retourner car
  // la consigne me demande un tableau en return
  // il va contenir les valeurs communes
  let tab_communs = [];

  // Je me deplace sur le tableau 1
  for (let i = 0; i < tables_1.length; i++) {
    // Je me deplace sur le tableau 2
    for (let j = 0; j < tables_2.length; j++) {
      // Je verifie si la valeur de l'element
      // dans les tableaux sont egaux
      if (tables_1[i] == tables_2[j]) {
        // Je sais pas si un doublon est deja dans le
        // tableau a retourner donc je met a false
        let has_doublon = false;
        // Je parcoure le tableau a retourner
        for (let k = 0; k < tab_communs.length; k++) {
          // Je regar si la velur commun trouve entre
          //  tableau 1 et tableau 2 est presente
          // dans le tableau retourner
          if (tables_1[i] == tab_communs[k]) {
            // Oui il y deja un doublon donc
            // je previens que il existe deja
            has_doublon = true;
          }
        }
        // Je retourner les valuer communes trouver
        //  si elle n'ont pas ete deja retourner dans
        //  le tableau que je vais retourner a la fin de
        // la fonction
        if (!has_doublon) tab_communs.push(tables_1[i]);
      }
    }
  }
  // Je retourner les valuer communes trouver
  return tab_communs;
}

console.log(elementsCommuns([1, 2, 2, 3, 4], [2, 3, 5, 2]));

console.log("--------------------------");

// Déclaration de la fonction valeursUniques avec deux paramètres : tabs1 et tabs2
function valeursUniques(tabs1, tabs2) {
  // Création d'un tableau vide pour stocker les éléments uniques
  let tab_unique = [];

  // Boucle pour parcourir tous les éléments du premier tableau tabs1
  for (let i = 0; i < tabs1.length; i++) {
    // Variable booléenne pour vérifier si l'élément de tabs1[i] existe aussi dans tabs2
    let existe = false;

    // Boucle pour comparer l'élément tabs1[i] à tous les éléments de tabs2
    for (let j = 0; j < tabs2.length; j++) {
      // Si l'élément est trouvé dans les deux tableaux
      if (tabs1[i] == tabs2[j]) {
        existe = true; // On note qu'il n'est pas unique
      }
    }

    // Si tabs1[i] n'existe pas dans tabs2
    if (!existe) {
      // Variable pour vérifier si tabs1[i] est déjà dans le tableau tab_unique
      let deja_la = false;

      // On parcourt tab_unique pour voir si tabs1[i] y est déjà
      for (let k = 0; k < tab_unique.length; k++) {
        // Si on trouve tabs1[i] déjà présent dans tab_unique
        if (tabs1[i] == tab_unique[k]) {
          deja_la = true; // On évite les doublons
        }
      }

      // Si l'élément n'était pas déjà dans tab_unique
      if (!deja_la) {
        tab_unique.push(tabs1[i]); // On l’ajoute au tableau
      }
    }
  }

  // Deuxième partie : on fait maintenant la même chose avec tabs2
  for (let i = 0; i < tabs2.length; i++) {
    // Vérifie si l’élément de tabs2[i] existe dans tabs1
    let existe = false;

    // Boucle de comparaison avec les éléments de tabs1
    for (let j = 0; j < tabs1.length; j++) {
      // Si tabs2[i] est aussi dans tabs1
      if (tabs2[i] == tabs1[j]) {
        existe = true; // Ce n'est pas un élément unique
      }
    }

    // Si tabs2[i] n'existe pas dans tabs1
    if (!existe) {
      // Vérifie si tabs2[i] est déjà dans tab_unique
      let deja_la = false;

      // Parcourt tab_unique pour vérifier les doublons
      for (let k = 0; k < tab_unique.length; k++) {
        // Si tabs2[i] est déjà dans tab_unique
        if (tabs2[i] == tab_unique[k]) {
          deja_la = true;
        }
      }

      // Si tabs2[i] est réellement unique
      if (!deja_la) {
        tab_unique.push(tabs2[i]); // On l’ajoute
      }
    }
  }

  // On retourne le tableau final contenant tous les éléments uniques
  return tab_unique;
}

// Exemple d'utilisation de la fonction avec deux tableaux [1, 2, 3] et [2, 4, 5]
console.log(valeursUniques([1, 2, 3], [2, 4, 5]));
// Résultat attendu : [1, 3, 4, 5]

console.log("--------------------------");
