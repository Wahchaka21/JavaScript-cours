const fs = require("fs");

function addNote(content) {
  return fs.writeFileSync("notes2.txt", content);
}
// addNote();

function lisNote() {
  return fs.readFileSync("notes2.txt", "utf-8");
}
// lisNote();

module.exports = {
  addNote,
  lisNote,
};
