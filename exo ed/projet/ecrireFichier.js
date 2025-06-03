const fs = require("fs");

function ecrireFichier(nomFichier, contenu, callback) {
  fs.appendFileSync(nomFichier, contenu, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}
ecrireFichier("test.txt", "OUI ET TOI ?", function (err, data) {
  console.log(data);
});

module.exports = ecrireFichier;
