/* exo gestion de fichier avec callbacks
objectifs
comprendre et utiliser les callbacks

lire et écrire dans des fichiers

gérer correctement les erreurs avec des callbacks

projet/
|--lireFichier.js
|--ecrireFichier.js
|--gererFichiers.js
|--test.txt <- "SALUT ÇA VA ? OK"

1- écrire une fonction pour lire un fichier (lireFichier.js)
Écris une fonction qui lit le fichier test.txt et renvoie son contenue via un callback. */
const fs = require("fs");

function lireFichier(nomFichier, callback) {
  fs.readFile(nomFichier, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}
lireFichier("test.txt", function (err, data) {
  console.log(data);
});

module.exports = lireFichier;
