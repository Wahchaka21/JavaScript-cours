const fs = require("fs");

let errorCallback = (filename) => (err, data) => {
  if (err) console.error("Impossible de lire le fichier :", filename);
};

let file = fs.readFile("calcback.js", "utf-8", errorCallback("callback"));
