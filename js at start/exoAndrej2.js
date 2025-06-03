// On va apprendre à faire des choses amusantes avec du code !

// Une fonction pour additionner les nombres dans un tableau
function sommeTableau2(tab) {
  let somme = 0; // On commence avec zéro, c'est notre point de départ
  if (tab && tab.length) {
    // On vérifie si le tableau existe et s'il n'est pas vide
    tab.forEach((element) => {
      if (!isNaN(element)) {
        // Si l'élément est un nombre (pas une lettre ou autre chose)
        somme += element; // On ajoute ce nombre à notre somme
      }
    });
    return somme; // On retourne la somme totale
  }
  return -1; // Si le tableau est vide ou n'existe pas, on retourne -1 (ça veut dire "pas possible")
}
console.log(sommeTableau2([1, 2, 3, 5])); // On teste avec un tableau de nombres
console.log("-----------------------"); // Juste pour séparer les résultats dans la console

// Une fonction rigolote qui crie des choses
function artoria(noblePhantasm) {
  if (noblePhantasm === "EKUSU...") {
    // Si on dit "EKUSU..."
    console.log(noblePhantasm + "KARIBAAAAAAAAAA"); // Ça crie "EKUSU...KARIBAAAAAAAAAA"
  } else {
    console.log("Bobardilo crocolido"); // Sinon, ça dit un truc bizarre
  }
}
artoria("EKUSU..."); // On teste avec "EKUSU..."
console.log("-----------------------");

// Une fonction pour inverser les lettres d'un mot
function inverserMot(mot) {
  // Si le mot est vide (rien dedans), on le retourne tel quel
  if (mot === "") return "";
  // Sinon, on prend la première lettre, on la met à la fin, et on recommence avec le reste
  return inverserMot(mot.slice(1)) + mot[0];
}
console.log(inverserMot("aggiN")); // On teste avec "aggiN" (ça devient "Nigga")
console.log("-----------------------");

// Une fonction pour inverser l'ordre des mots dans un tableau
let tab = ["ça fait BOOM !", "tour ", "avion + "]; // Un tableau avec des phrases rigolotes

function inverseMots(tabs) {
  if (tabs.length <= "") {
    // Si le tableau est vide, on retourne un tableau vide
    return "";
  }
  // Sinon, on prend le premier mot, on le met à la fin, et on recommence avec le reste
  return inverseMots(tabs.slice(1)) + tabs[0];
}

console.log(inverseMots(tab)); // On teste avec notre tableau (ça inverse l'ordre des phrases)
console.log("-----------------------");

//autre exo de récurcivité
const animaux = {
  nom: "chiens",
  chiens: [
    { nom: "Chihuahua", maitre: "Pablo", puissance: 1 },
    { nom: "Berger allemand", maitre: "Le p'tit Lulu", puissance: 88 },
  ],
  sousCategories: [
    {
      nom: "A poil long",
      chiens: [
        { nom: "Golden retriever", maitre: "Pablo", puissance: 80 },
        { nom: "Berger australien", maitre: "Alice", puissance: 99 },
      ],
      sousCategories: [
        {
          nom: "Anomalies",
          chiens: [{ nom: "Caniche", maitre: "Kim K", puissance: 5 }],
          sousCategories: [],
        },
      ],
    },
    {
      nom: "A poil court",
      chiens: [
        { nom: "Bulldog", maitre: "Gaël", puissance: 86 },
        { nom: "Pit", maitre: "Brad", puissance: 90 },
      ],
      sousCategories: [],
    },
  ],
};

function grosChien(objet, master) {
  //afficher que les chiens de pablo
  objet.chiens.forEach((chien) => {
    if (chien.maitre === master) {
      // Si le maître du chien est "Pablo", on l'affiche
      console.log(chien.nom);
    }
  });

  objet.sousCategories.forEach((sousCategorie) =>
    grosChien(sousCategorie, master)
  );
}

grosChien(animaux, "Pablo");

//trier chaque chiens par puissance du plus petit au plus grand et afficher leurs noms dans un tableau
function listerChien(objet) {
  let tab = [];

  tab = tab.concat(objet.chiens);

  objet.sousCategories.forEach((categorie) => {
    tab = tab.concat(listerChien(categorie));
  });

  return tab;
}

const tabChiens = listerChien(animaux);
console.log(tabChiens.sort((a, b) => b.puissance - a.puissance));
