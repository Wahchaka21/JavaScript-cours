const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");
const os = require("os");

const filename = "log_correction_" + dayjs().format("DD-MM-YYYY") + ".txt";
const folder = path.join(__dirname, "LOGS");

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}

const log =
  os.userInfo().username +
  "(" +
  os.platform() +
  " - " +
  os.hostname() +
  ") s'est connecté(e) à " +
  dayjs().format("hh:mm:ss") +
  "\n";

const fileFolder = path.join(folder, filename);
fs.appendFileSync(fileFolder, log);

const logs = fs.readFileSync(fileFolder, "utf8");

console.log(logs);

//console.log(folder, filename);
