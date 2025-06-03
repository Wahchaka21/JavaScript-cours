/*Créer récursivement une structure arborescente (dossiers et fichiers) à partir d'une liste de chemin
Chercher group et split, et join*/
// Fonction principale pour construire l'arborescence
const paths = [
  "src/app.js",
  "src/index.js",
  "src/modules/module1.js",
  "src/modules/module2.js",
  "src/modules/submodules/sub1.js",
  "README.md",
  "package.json",
];

// Fonction principale pour construire l'arborescence
// Fonction pour créer l'arbre à partir des chemins
function creerArbre(listeDeChemins) {
  // On crée la racine de l'arbre
  const racine = { name: "root", type: "folder", children: [] };

  // On va regrouper les chemins par leur premier dossier ou fichier
  const groupes = {};

  for (const chemin of listeDeChemins) {
    // On coupe le chemin en morceaux (ex: "src/app.js" => ["src", "app.js"])
    const morceaux = chemin.split("/");
    const premier = morceaux[0]; // Premier dossier ou fichier
    const reste = morceaux.slice(1); // Le reste du chemin

    // Si ce groupe n'existe pas encore, on le crée
    if (!groupes[premier]) {
      groupes[premier] = [];
    }

    // Si le reste n'est pas vide, on le rajoute pour traitement ultérieur
    if (reste.length > 0) {
      groupes[premier].push(reste.join("/")); // On recompose le reste du chemin
    }
  }

  // On parcourt chaque groupe pour remplir les enfants de la racine
  for (const nom in groupes) {
    if (groupes[nom].length === 0) {
      // Si le groupe est vide, c'est un fichier à la racine
      racine.children.push({ name: nom, type: "file" });
    } else {
      // Sinon, c'est un dossier, on appelle la fonction pour ses enfants
      racine.children.push({
        name: nom,
        type: "folder",
        children: creerArbre(groupes[nom]).children,
      });
    }
  }

  return racine;
}

const arbre = creerArbre(paths);
console.log(JSON.stringify(arbre, null, 2));
