const fs = require("fs");

function addNote(text) {
  fs.appendFileSync("notes.txt", text);
}

function readNotes() {
  return fs.readFileSync("notes.txt", "utf-8");
}

module.exports = {
  addNote,
  readNotes,
};
