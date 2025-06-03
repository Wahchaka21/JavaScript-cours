const fs = require("fs");

//================================= CRÉER UN FICHIER
fs.writeFileSync("notes.txt", "Bonjour je suis une patate"); //Permet d'écrire dans un fichier, s'il n'existe pas, il sera créé, et s'il existe le contenu sera écrasé

//================================= AJOUTER UNE LIGNE SANS MODIFIER LE FICHIER
fs.appendFileSync("notes.txt", "\nMaintenant je suis une courgette"); //Permet de rajouter quelque chose dans un fichier (le \n c'est pour dire revenir à la ligne)

//================================= FAIRE UNE BOUCLE POUR AFFICHIER X LIGNE DE TEXTE
for (let i = 0; i < 10; i++) {
  fs.appendFileSync("notes.txt", "\nUwU n° " + [i + 1] + "\n"); //avec ça, ça permet d'écrire UwU 10 fois dans le fichier
}

//================================= LIRE UN FICHIER
const data = fs.readFileSync("notes.txt", "utf-8"); //ça permet de directement lire le ficher dans notre terminal, le utf-8 c'est bien pour qu'il puisse lire les accents genre
console.log(data);

//================================= TRY / CATCH POUR TROUVER LES ERREURS
try {
  const content = fs.readFileSync("fichier_inexistant.txt", "utf-8"); // ça c'est pour vérifier si y a des erreurs !, genre il try sur un fichier
  console.log(content);
} catch (err) {
  //La il va "attraper" l'erreur
  console.error("Erreur lors de la lecture :", err.message); //et du coup la si y a une erreur il m'affiche l'erreur, donc la vu que le fichier n'existe pas il va dire que le fichier n'existe pas.
}
