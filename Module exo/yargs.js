const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Additionner deux nombres",
  builder: {
    a: { type: "number", demandOption: true },
    b: { type: "number", demandOption: true },
  },
  handler(argv) {
    console.log("Résultat : " + (argv.a + argv.b));
  },
});

yargs.parse();
