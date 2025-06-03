//crée un produit
let product = {
  nom: "Produit A", //string
  prix: 5, //number
  stock: 100, //number
  nombre_vendu: 10, //number
};

product.gain = product.nombre_vendu * product.prix; //nom du produit.le nom de la variable pour pointer une variable d'un produit
//console.log pour afficher dans le terminal
console.log("Le produit", product.nom, "a généré un profit de", product.gain);

//faire des conditions
if (product.gain > 0) {
  // si le gain est supérieur à 0
  console.log("alors, le produit est rentable");
}
//else veut dire s'il n'est pas supérieur à 0 alors...
else {
  console.log("alors, le produit n'est pas rentable");
}

let variableSimple1 = 12; //déclaration d'une variable simple
let variableSimple2 = variableSimple1; //variableSimple2 est égale à variableSimple1
variableSimple1 = 35; //variableSimple1 est égale à 35

console.log("variableSimple1", variableSimple1); //affiche 35
console.log("variableSimple2", variableSimple2); //affiche 12

let variableComplexe1 = ["informatique", "matériel", "logiciel"]; //Faire un tableau
let variableComplexe2 = variableComplexe1; //variableComplexe2 est égale à variableComplexe1
let variableComplexe3 = [...variableComplexe1]; //pour faire un clone il faut faire "..."
console.log(variableComplexe1);

variableComplexe2.push("course"); //ajoute un élément à la fin du tableau

console.log("variableComplexe1", variableComplexe1);
console.log("variableComplexe2", variableComplexe2);
console.log("variableComplexe3", variableComplexe3);

//les boucles for
for (let i = 0; i < 10; i++) {
  // en gros la valeur de i est 0. tant que i est inférieur à 10, on incrémente de 1 (++ veut dire +1)
  console.log("compteur" + i);
}
//exemple de for avec tableau
const tab = ["t1", "t2", "t3"];
for (let i = 0; i < tab.length; i++) {
  // tant que i est inférieur à la longueur du tableau
  console.log("élément" + tab[i]); //affiche l'élément du tableau
}

for (let i = 10; i >= 0; i--) {
  // tant que i est supérieur à 0
  console.log("compteur" + i);
}

//les boucles while
let i = 0;
while (i < 5) {
  // tant que compteur est inférieur à 5
  console.log("compteur" + i);
  i++; //incrémente de 1
}

//exercices sur les tableaux avec modification
const fruits = ["pomme", "banane", "cerise"];
console.log(fruits[0]); //affiche le premier élément du tableau
fruits[1] = "kiwi"; //remplace le deuxième élément du tableau par kiwi
console.log(fruits);
fruits.push("mangue"); //ajoute un élément à la fin du tableau
console.log(fruits);
fruits.pop(); //supprime le dernier élément du tableau
console.log(fruits);

//excercice sur les tableaux avec les boucles
const notes = [12, 15, 9, 20];
let sum = 0; //on crée une variable somme à 0
//on fait une boucle for pour parcourir le tableau notes
for (let i = 0; i < notes.length; i++) {
  // tant que i est inférieur à la taille de mon tableau, on incrémente de 1
  let item = notes[i]; // on crée item et on donne la valeur de l'élément du tableau
  sum += item; // somme = somme + item
}
let avg = sum / notes.length; // on divise la somme par la longueur du tableau notes
console.log("La moyenne est de", avg); // on affiche la moyenne

for (let i = 0; i < notes.length; i++) {
  // tant que i est inférieur à la longueur du tableau notes
  let item = notes[i];
  if (item > 10) {
    // si l'élément est supérieur à 10
    console.log("l'élément est supérieur à 10");
  } else {
    console.log("l'élément est inférieur à 10");
  }
}

const voiture = {
  marque: "renault",
  modele: "clio",
  proprietaire: {
    nom: "jean",
    permis: true,
  },
};
console.log(voiture.proprietaire.nom); //affiche le nom du propriétaire

voiture.modele = "twingo"; //modifie le modèle de la voiture

voiture.annee = 2020; //ajoute une nouvelle propriété à l'objet voiture
console.log(voiture);

//crée un nouveau tableau avec seulement les noms --map
//filtre les personnes majeur -- filter
//trouve charlie -- for
const personnes = [
  { nom: "alice", age: 25 },
  { nom: "bob", age: 17 },
  { nom: "charlie", age: 30 },
];

let tab_1 = personnes.map(function (personnes) {
  //map permet de créer un tableau avec les noms
  return personnes.nom; //map permet de créer un tableau avec les noms
});
let tab_2 = personnes.filter(function (personnes) {
  //filtre les personnes
  return personnes.age >= 18; //filtre les personnes qui ont plus de 18 ans
});
let tab_3 = personnes.find(function (personnes) {
  //find permet de trouver une personne
  return personnes.nom === "charlie"; //find permet de trouver une personne
});
console.log(tab_1);
console.log(tab_2);
console.log(tab_3);

//crée un tableau avec des noms des produits qui coûtent plus de 10 euros
const produits = [
  { nom: "stylo", prix: 2 },
  { nom: "cahier", prix: 5 },
  { nom: "ordinateur", prix: 1200 },
];

let tab_4 = produits.map(function (personnes) {
  //map permet de créer un tableau avec les prix
  return personnes.prix; //map permet de créer un tableau avec les prix
});
let tab_5 = produits.filter(function (personnes) {
  //filtre les personnes
  return personnes.prix < 10; //filtre les personnes qui ont un prix inférieur à 10
});
//pour le faire que en une ligne
//let tab_4 = produits.filter(function(personnes) { return produits.prix > 10 }).map(function(personnes) { return personnes.nom })
console.log(tab_4);
console.log(tab_5);
