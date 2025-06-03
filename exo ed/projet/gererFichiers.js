const { lireFichier } = require("./lireFichier");
const { ecrireFichier } = require("./ecrireFichier");

lireFichier("./lireFichier.js", function (err, value) {
  if (err) {
    return err;
  }
  ecrireFichier("test.txt", value, function (err, value) {
    console.log(err, "FINI");
  });
});
