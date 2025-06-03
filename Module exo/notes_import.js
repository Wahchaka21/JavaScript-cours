const yargs = require("yargs");
const note = require("./notes");

yargs.command({
  command: "add",
  describe: "ajouter du texte",
  builder: {
    content: {
      describe: "Contenu de la note",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    note.addNote(argv.content);
    console.log("Note ajouter: " + argv.content);
  },
});

yargs.command({
  command: "read",
  describe: "Lire la note",
  builder: {
    content: {
      describe: "Contenu de la note",
      type: "string",
      demandOption: true,
    },
  },
  handler() {
    console.log(note.lisNote());
  },
});

yargs.parse();
