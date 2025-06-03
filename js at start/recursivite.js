// Définition de la fonction factorielle qui calcule la factorielle d'un nombre n
function factorielle(n) {
  // Si n est égal à 0, la factorielle est 1 (cas de base)
  if (n === 0) {
    return 1;
  }
  // Sinon, la fonction retourne n multiplié par la factorielle de n-1 (récursion)
  return n * factorielle(n - 1);
}

// Affiche le résultat de la factorielle de 5 dans la console
console.log(factorielle(5));
console.log("-----------------------");

// Définition de la fonction estPalindrome qui vérifie si une chaîne de caractères est un palindrome
function estPalindrome(chaine) {
  // Si la longueur de la chaîne est inférieure ou égale à 1, c'est un palindrome (cas de base)
  if (chaine.length <= 1) {
    return true;
  }
  // Si le premier caractère n'est pas égal au dernier, ce n'est pas un palindrome
  if (chaine[0] !== chaine[chaine.length - 1]) {
    return false;
  }
  // Sinon, on vérifie récursivement la sous-chaîne sans le premier et le dernier caractère
  return estPalindrome(chaine.slice(1, -1));
}

// Affiche dans la console si la chaîne "eluparcettecrapule" est un palindrome
console.log(estPalindrome("eluparcettecrapule"));
console.log("-----------------------");

// faire un compte à rebours
function montreIrakienne(nb) {
  if (nb == 0) {
    // Condition d'arrêt : si nb est 0, on affiche "BOOM!" et on arrête la récursion
    console.log("BOOM!");
  } else {
    // Sinon, on affiche le nombre...
    console.log(nb, "...");
    nb--; // ...on le décrémente
    montreIrakienne(nb); // ...et on rappelle la fonction avec le nouveau nb
  }
}

montreIrakienne(10); // Lance le compte à rebours à partir de 10
console.log("-----------------------");

// faire pareil mais avec un tableau
const fruits = ["Artoria", "Ahri", "2B"];

function afficherTableauRecursivement(tab, e) {
  if (e == tab.length) {
    // Condition d'arrêt : quand on atteint la fin du tableau
    return;
  } else {
    // Sinon, on affiche l'élément courant
    console.log(tab[e]);
    // Et on rappelle la fonction avec l'index suivant
    afficherTableauRecursivement(tab, e + 1);
  }
}

afficherTableauRecursivement(fruits, 0); // Affiche chaque fruit un par un
console.log("-----------------------");

const personne = {
  nom: "Luka",
  age: 21,
  adresse: {
    rue: "21 rue des racistes",
    ville: "Cistra",
    country: "Allemagne",
  },
};

function afficherObjetRecursivement(object) {
  for (let key in object) {
    if (typeof object[key] == "object") {
      afficherObjetRecursivement(object[key]); // Appel récursif sans garder le chemin
    } else {
      console.log("affiche ", key, ":", object[key]);
    }
  }
}

afficherObjetRecursivement(personne); // Affiche toutes les infos, même imbriquées
console.log("-----------------------");

// afficher tous les noms des éléments d'un arbre
const arbre = {
  nom: "Parent",
  enfants: [
    { nom: "le gosse 1", enfants: [] },
    { nom: "le gosse 2", enfants: [{ nom: "Petit-gosse 1", enfants: [] }] },
  ],
};

// Fonction récursive pour parcourir un arbre et afficher tous les noms
function afficherArbre(tab) {
  console.log("Nom : " + tab.nom); // Affiche le nom de l'élément actuel
  tab.enfants.forEach((e) => {
    afficherArbre(e); // Appelle la fonction récursivement sur chaque enfant
  });
}

afficherArbre(arbre); // Lance l'affichage à partir de la racine
console.log("-----------------------");
