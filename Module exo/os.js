const os = require("os"); //os c'est un module natif
console.log("Nom d'utilisateur :", os.userInfo().username);
console.log("Temps de fonctionnement (en seconde) :", os.uptime());
