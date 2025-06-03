//parcourir chaque éléments du tableau
//pour chaque élément compare avec tous les suivants
// dés que deux sont égaux retourne cet élément
//si aucun doublon n'est trouvé retourné null
function premierDoublon(tabs) {
  for (let i = 0; i < tabs.length; i++) {
    for (let j = i + 1; j < tabs.length; j++) {
      if (tabs[i] == tabs[j]) return tabs[1];
    }
  }
  return null;
}

console.log(premierDoublon[(7, 9, 8, 3, 4, 3, 2, 1)]);
console.log("-------------------------");

//écris une fonction eliminerTriplons(tab) qui retourne un tableau en supprimant tous les éléments qui apparaissent 3 fois ou plus
function eliminerDoublons(tab) {
  let results = [];
  for (let i = 0; i < tab.length; i++) {
    let compteur = 0;
    for (let j = 0; j < tab.length; j++) {
      if (tab[i] == tab[j]) compteur++;
    }
    if (compteur < 3) {
      results.push(tab[i]);
    }
  }
  return results;
}

console.log(eliminerDoublons([1, 2, 2, 2, 3, 3, 4, 4, 4, 4]));
console.log("-------------------------");

//trier
function trierTableau(tabs1) {
  let results = [...tabs1];
  for (let i = 0; i < results.length; i++) {
    if (i + 1 < results.length && results[i] > results[i + 1]) {
      let temp = results[i];
      results[i] = results[i + 1];
      results[i + 1] = temp;
      i = -1;
    }
  }
  return results;
}

let tableau = [5, 2, 9, 1, 4];
let resultats = trierTableau(tableau);
console.log(resultats);
console.log("-------------------------");

//pareil mais avec des objets

function trierTableauObject(tabs2) {
  let result = [...tabs2];
  for (let i = 0; i < result.length; i++) {
    if (i + 1 < result.length && result[i].position > result[i + 1].position) {
      let temp = result[i];
      result[i] = result[i + 1];
      result[i + 1] = temp;
      i = -1;
    }
  }
  return result;
}

let tableau1 = [
  { name: "jean", position: 10 },
  { name: "lut", position: 5 },
  { name: "lolo", position: 13 },
];

let resultat = trierTableauObject(tableau);

console.log(resultat);
console.log("-------------------------");
