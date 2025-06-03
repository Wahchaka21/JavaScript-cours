//utilisation du module crée dans calcul_module
const calc = require("./calcul_module"); // ./ car le fichier est local

console.log(calc.addition(5, 3)); //8
console.log("-");
console.log(calc.soustraction(10, 4)); //6
