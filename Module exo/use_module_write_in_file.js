//================================= Test module dans module_write_in_file.js
const myModule = require("./module_write_in_file");

const text = "\nTest du module dans use_module_write_in_file.js";
myModule.addNote(text);
console.log(myModule.readNotes());
