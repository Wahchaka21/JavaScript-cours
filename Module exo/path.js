const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "data", "notes2.txt"); //en gros ça veut dire join -> le fichier ou on est (__dirname) le dossier "data" et le fichier "notes.txt"
fs.writeFileSync(filePath, "EKUSUKARIBA"); //en gros c'est écrire dans filepath (du coup c'est le chemin qu'on lui à assigné) EKUSUKARIBA
