//mise en pratique de fs et path
const fs = require("fs");
const path = require("path");

fs.writeFileSync("notes_exo.txt", "Ma première note");
fs.appendFileSync("notes_exo.txt", "\nUne autre idée à retenir");
try {
  const content = fs.readFileSync("notes_exo.txt", "utf-8");
  console.log(content);
} catch (err) {
  console.error("Erreur lors de la lecture :", err.message);
}
