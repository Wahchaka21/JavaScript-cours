// crée un objet animal avec une propriété nom et une méthode crier
let animal = {
  // déclaration de l'objet
  nom: "chienne", // propriété nom
  crier() {
    // méthode crier (fonction)
    console.log("ouaf ouaf je suis une grosse " + this.nom); // this fait référence à l'objet animal
  },
};
animal.crier(); // il faut la déclarer pour que ça fonctionne

//exo avec un return
function doubler(x) {
  // déclaration de la fonction doubler avec comme paramètre x
  console.log("la valeur de x est donc " + x); // affiche la valeur de x qui est 5 vu qu'on la déclare plus bas avec "let nombre = 5"
  return x * 2; // renvoie la valeur de x multipliée par 2 donc 5 * 2
}
let nombre = 5; // déclaration de la variable nombre avec la valeur 5
console.log("le double est " + doubler(nombre)); // affiche le résultat de la fonction doubler avec comme paramètre la variable nombre

const array1 = [1, 4, 9, 16]; // déclaration d'un tableau avec des valeurs

const map1 = array1.map((x) => x * 2); // on multiplie chaque élément du tableau par 2

console.log(map1); // affiche le tableau multiplié par 2

//pour afficher les éléments d'un tableau avec leur index
const numbers = [10, 22, 1, 4]; // déclaration d'un tableau avec des valeurs
const filteredNumbers = numbers.map((num, index) => {
  // on crée un tableau avec les éléments du tableau numbers, on est pas obliger de mettre num ou index comme nom,
  // c'est l'ordre qui importe, en premier il affiche le numéro et ensuite l'index (la position dans le tableau)
  console.log(num, index); // affiche chaque élément du tableau avec son index
});

const notes = [12, 15, 8, 17];
const notesDouble = notes.map((x) => x * 2); // on crée un tableau avec les éléments du tableau notes multipliés par 2
console.log(notesDouble); // affiche le tableau notes multiplié par 2

//utilisation de forEach
const prenoms = ["Emma", "Luca", "Lina"]; // déclaration d'un tableau avec des valeurs
const prenoms1 = prenoms.forEach((name) => {
  // forEach c'est comme .map mais il ne renvoie pas de tableau, il affiche juste les éléments du tableau
  console.log("Ni*** ta mère " + name); // affiche chaque élément du tableau
});

// pour faire en sorte de faire un message personnalisé pour chaque prénom
const prenoms2 = ["Emma", "Luca", "Lina"];
const messagePErsonnalisé = [
  "Comment vas-tu ?",
  "alors on est raciste ?",
  "prêt à JavaScripter ?",
];
//On va utiliser la méthode forEach pour parcourir le tableau et afficher chaque prénom avec un message personnalisé
prenoms.forEach(function (prenom, index) {
  console.log("Bonjour " + prenom + " " + messagePErsonnalisé[index]); // on met [index] pour afficher le message personnalisé qui correspond au prénom
});

//utilisaton de filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6); // on crée un tableau avec les éléments du tableau words qui ont une longueur supérieure à 6
console.log(result); // affiche le tableau words avec les éléments qui ont une longueur supérieure à 6

//utilisation de map, filter et forEach
let personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 17 },
  { nom: "Charlie", age: 30 },
  { nom: "Diana", age: 16 },
];
// On utilise filter pour ne garder que les personnes majeures
const Majeur = personnes.filter((person) => person.age >= 18); // on crée un tableau avec les éléments du tableau personnes qui ont un age supérieur ou égal à 18
console.log(Majeur);
// On utilise map pour créer un tableau avec les noms des personnes majeures
const isMajeur = Majeur.map((person) => person.nom); // on crée un tableau avec les éléments du tableau Majeur qui ont un nom
console.log(isMajeur);
// On utilise forEach pour afficher chaque nom retenue
const names = isMajeur.forEach((person) => console.log(person));

// avec find
const personnes1 = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 17 },
  { nom: "Charlie", age: 30 },
  { nom: "Diana", age: 16 },
];
// On utilise find pour trouver la première personne majeure
const majeur = personnes1.find((person) => person.age >= 18); // on crée un tableau avec les éléments du tableau personnes qui ont un age supérieur ou égal à 18
console.log(majeur); // affiche la première personne majeure

//revue des boucles for
for (let i = 0; i <= 9; i++) {
  // tant que i est inférieur ou égal à 9 fait +1
  console.log(i);
}

//avec while
let i = 0; // déclaration de la variable i avec la valeur 0
while (i <= 9) {
  // tant que i est inférieur ou égal à 9 fait +1
  console.log(i);
  i++; // incrémente i de 1
}

// avec do while
let j = 0; // déclaration de la variable j avec la valeur 0
do {
  // le do va s'exécuter au moins une fois
  console.log(j); // affiche la valeur de j
  j++; // incrémente j de 1
} while (j <= 9); // tant que j est inférieur ou égal à 9 fait +1

// for avec un tableau
let tableau = ["pomme", "banane", "orange"]; // déclaration d'un tableau avec des valeurs
for (let i = 0; i < tableau.length; i++) {
  // tant que i est inférieur à la longueur du tableau fait +1
  console.log(tableau[i]); // affiche chaque élément du tableau
}

// faire une boucle for pour calculer la somme d'un tableau
let tableau1 = [1, 2, 3, 4, 5]; // déclaration d'un tableau avec des valeurs
let somme = 0; // déclaration de la variable somme avec la valeur 0 sinon on peut pas la calculer
for (let i = 0; i < tableau1.length; i++) {
  // tant que i est inférieur à la longueur du tableau fait +1
  somme += tableau1[i]; // on ajoute chaque élément du tableau à la somme, et on met [i] pour accéder à l'élément du tableau
}
console.log("la somme est " + somme); // affiche la somme des éléments du tableau

//return true si le nombre est pair
function estPair(x) {
  // déclaration de la fonction estPair avec comme paramètre nombre
  return x % 2 === 0; // renvoie true si le reste de la division de nombre par 2 est égal à 0
}

//en une ligne
const estPair2 = (x) => x % 2 === 0; //on remplace la fonction par une const, on le nomme parei "estPair" et on lui fait direct la fonction fechlé sans paranthèses
//le x on début c'est le paramètre la => pourrais s'apparenter au "return" et veut dire "exécute moi ça"

//crée une fonction de compteur de clics
function compteurDeClics() {
  let clics = 0;
  return function () {
    clics++;
    console.log("Vous avez cliqué" + clics + " fois");
  };
}

const boutonClique = compteurDeClics();
const test = compteurDeClics();
boutonClique(); //vous avez cliqué 1 fois
boutonClique(); //vous avez cliqué 2 fois

//comprendre callback (un peu sombre la syntaxe)
let mot = "quoi"; // déclaration de la variable mot avec la valeur "quoi"

function afficherMot(rep) {
  // déclaration de la fonction afficherMot avec comme paramètre rep

  console.log(rep, "!"); // affiche la valeur de rep qui est "feur" vu qu'on la déclare plus bas avec "const rep = "feur""
}

function traiterMot(callback) {
  // déclaration de la fonction traiterMot avec comme paramètre callback
  const rep = "feur"; // déclaration de la variable rep avec la valeur "feur"
  if (mot == "quoi") {
    // si mot est égal à "quoi" alors
    console.log(mot, "?"); //affiche moi la valeur de mot qui est "quoi"
  } else {
    // sinon
    console.log("hein ?"); // affiche "hein ?"
    return 0; // renvoie 0
  }

  callback(rep); // appelle la fonction afficherMot avec comme paramètre rep
}

traiterMot(afficherMot); // appelle la fonction traiterMot avec comme paramètre afficherMot

//exo callback (c'est plus clair la)
function connexion30min(param1, tata) {
  console.log("nom : " + param1); //enfaite la on lui dit écrit nom : + le param1 en gros c'est une histoire de position genre en bas on déclare que en position 1 c'est Ahri
  //donc ça va écrire nom : Ahri
  tata(); //la on dit éxecute le 2 ème paramètre "tata"
}
function ecrireLog10sec() {
  //la en gros on dit le deuxième paramètre il s'appelle ecrireLog10sec et il est égal à UwU
  console.log("UwU");
}
connexion30min("Ahri !", ecrireLog10sec); //enfaite la le connexion30min c'est un console.log et on lui dit d'écrire le paramètre 1 (Ahri) et le paramètre 2 (UwU)
//affiche : Ahri : UwU

//fonction récursive
function aled(x) {
  if (x == 0) {
    console.log("on va manger !");
  } else {
    let nbSuivant = x - 1; //nbSuivant est égal à x - 1
    console.log(nbSuivant);
    aled(nbSuivant); //appel la fonction aled avec comme paramètre nbSuivant
  }
}

aled(5); //faut définir la valeur de "aled" sinon ça marche pas !

//gros exo
const livres = [
  { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
  {
    titre: "Le Meilleur des Mondes",
    auteur: "Aldous Huxley",
    annee: 1932,
    disponible: false,
  },
  {
    titre: "Fahrenheit 451",
    auteur: "Ray Bradbury",
    annee: 1953,
    disponible: true,
  },
];

// 1 afficher que les livres et les auteur
function afficherLivres(liste) {
  liste.forEach((livre) =>
    console.log("livre : " + livre.titre + ", auteur : " + livre.auteur)
  ); //pour chaque livre affiche moi le titre et l'auteur
}
afficherLivres(livres); // ! ! ! il faut la déclarer sinon le console log il marche pas ! ! !

// 2 retourner que les livre disponible (true)
function livresDisponible(liste) {
  // déclaration de la fonction livresDisponible avec comme paramètre liste
  return liste.filter((livre) => livre.disponible); // filtre les livres qui sont disponible
}
console.log(livresDisponible(livres)); //affiche les livres disponible
livresDisponible(livres); // ! ! ! il faut la déclarer sinon le console log il marche pas ! ! !

//3 ajoute un nouveau livre "la pene flat" à au tableau
function ajouterLivre(liste, livre) {
  liste.push(livre); // ajoute le livre à la liste
}
ajouterLivre(livres, {
  titre: "la pene flat",
  auteur: "Skyyart",
  annee: 2020,
  disponible: true,
}); //on nomme le livre et tout...
console.log(livres); //affiche la liste avec le livre ajouté

//4 fonction recherche en fonction de l'auteur
function rechercheParAuteur(liste, nomAuteur) {
  return liste.filter((livre) => livre.auteur === nomAuteur); // filtre les livres qui ont le même auteur que nomAuteur (liste moi pour chaque livre l'auteur qui est égal à la valeur que je lui donne (ici George Orwell))
}
console.log(rechercheParAuteur(livres, "George Orwell")); //affiche les livres de George Orwell

//5 crée une fonction traiterLivre(callback) qui exécute une fonction de traitement callback sur la liste des livres
function traiterLivre(callback) {
  // déclaration de la fonction traiterLivre avec comme paramètre callback
  callback(livres); // appelle la fonction callback avec comme paramètre livres
}

//6 appelle traiterLivres() en lui passant afficherLivres comme callback
traiterLivre(afficherLivres); // appelle la fonction traiterLivre avec comme paramètre afficherLivres

//récurcivité
const dossier = {
  nom: "racine",
  fichiers: ["fichier1;txt", "fichier2.txt"],
  sousDossiers: [
    {
      nom: "images",
      fichiers: ["photo.jpg"],
      sousDossiers: [],
    },
    {
      nom: "docs",
      fichiers: ["cv.pdf"],
      sousDossiers: [
        {
          nom: "archives",
          fichiers: ["ancien.docs"],
          sousDossiers: [],
        },
      ],
    },
  ],
};

function tell_file(folder) {
  folder.fichiers.forEach((fichier) => console.log(fichier)); //on fait un .forEach pour afficher les fichiers du dossier
  folder.sousDossiers.forEach((sousDossier) => tell_file(sousDossier)); //comme le dossier contient des sous dossiers, on rappelle la fonction pour qu'elle
} //s'exécute aussi sur les sous dossiers, c'est une fonction récursive

tell_file(dossier); //ne jamais oublier de l'appeler en définissant ce qu'est le paramètre, ici folder est égal à dossier

//exo fonction récurcive, calculer le total des calories
const repas = {
  //Pas un tableau
  nom: "Menu Complet",
  calories: 200,
  sousPlats: [
    //Est un tableau
    { nom: "Salade", calories: 150 }, //Pas de sousPlats
    {
      nom: "Burger",
      calories: 500,
      sousPlats: [
        { nom: "Steak", calories: 250 },
        { nom: "Pain", calories: 100 },
      ],
    },
  ],
};

function caloriesTotales(plat) {
  //Fonction qui calcule toutes les calories
  let somme = plat.calories || 0; //On déclare somme, qui a soit la valeur de plat.calories (on ne peut pas faire de forEach ici car plat n'est pas un tableau ici) soit 0 si plat.calories n'existe pas au départ
  if (plat.sousPlats && plat.sousPlats.length) {
    //On vérifie que sousPlats existe, car si on fait le forEach sans cette sécurité le code va break si il n'y a pas de sousPlats, comme dans notre const repas pour l'objet Salade
    plat.sousPlats.forEach(
      (sousPlat) => {
        somme += caloriesTotales(sousPlat);
      } //On fait ici le forEach car sousPlats est un tableau, et comme on réutilise la fonction caloriesTotales avec sousPlat en argument, plat sera remplacé par sousPlats dans le forEach, et on ajoute à somme la valeur de toutes les calories
    );
  }
  return somme; //On retourne notre somme
}
console.log("Les calories totales du plat sont de :", caloriesTotales(repas)); //Wahou ça marche la tchim !
