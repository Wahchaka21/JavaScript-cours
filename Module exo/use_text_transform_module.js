const transformText = require("./text_transform_module");
//utilisation du module crée dans text_transform_module

const text = "EKUSU...KARIBAAAAAAAA";
console.log(transformText.capitalize(text)); //EKUSU...KARIBAAAAAAAA
console.log("---------------------");
console.log(transformText.reverse(text)); //AAAAAAAABIRAK...USUKE
