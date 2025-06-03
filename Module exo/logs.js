// à chaque fois qu'on lance le logs.js ça ajoute une ligne dans un fichier logs_(la date du jour).txt dans le repertoire LOGS (crée avec ub script) avec une ligne :     utilisateur(TYPE-OS, NOM-MACHINE) s'est connecté(e) à HH:MM:SS
// et enfin on fait un console log du contenu de logs....txt

//dabord on charge les module nécessaires
const os = require("os"); //OS permet d'accéder aux infos système
const fs = require("fs"); //File system permet de lire/écrire/créer des fichiers et dossiers
const path = require("path"); //path permet de gérer les chemins de fichiers/dossier
let ip = require("ip"); // ça, ça viens de npm install ip. Il permet de récupérer l'adresse ip locale de mon pc (parce que avec OS chepa pourquoi ça marche pas)

// On récupère le nom de l'utilisateur connecté à la machine
const user = os.userInfo().username;

// On récupère le type du système d'exploitation (par exemple, "Linux" ou "Windows_NT")
const osType = os.type();

// On récupère le nom de la machine (le nom de l'ordinateur sur le réseau)
const machineName = os.hostname();

// la ça deviens un peu compliqué
// On crée un objet Date qui contient la data et l'heure actuelles
const now = new Date();

// Après, on formate la date au format "YYYY-MM-DD" (année-mois-jour) en utilisant `toISOString` et en prenant les 10 premiers caractères
const dateStr = now.toISOString().slice(0, 10); // Exemple : "2025-05-13"

// Ensuite, on formate l'heure au format "HH:MM:SS" (heures:minutes:secondes) en utilisant `toTimeString` et en prenant les 8 premiers caractères
const timeStr = now.toTimeString().slice(0, 8); // Exemple : "14:30:45"

// Enfin, on définit le chemin du dossier "LOGS" où les fichiers de logs seront stockés
const logsDir = path.join(__dirname, "LOGS"); //__dirname c'est le dossier ou ce trouve notre script, et le path.join ça crée un chemin complet vers le sous dossiers "LOGS"

// On fait une petite vérif si le dossier "LOGS" existe déjà
if (!fs.existsSync(logsDir)) {
  // Si le dossier n'existe pas, on le crée avec "fs.mkdirSync"
  fs.mkdirSync(logsDir);
}

// On définit le chemin du fichier de log pour la date actuelle
// Le fichier sera nommé "logs_YYYY-MM-DD.txt" (par exemple, "logs_2025-05-13.txt")
const logFile = path.join(logsDir, "logs_" + dateStr + ".txt"); //en gros (logsDir, "logs_" + dateStr + ".txt") ça fait ./LOGS/logs_2025-05-13.txt

// ensuite, on construit la ligne à écrire
// Cette ligne contient : nom de l'utilisateur, type du système, nom de la machine, et l'heure de connexion, ainsi que l'adresse ip(faut faire avec npm install ip)
// Enfaite cette ligne est une chaîne de caractères concaténée qui va donner un truc du genre : L'utilisateur quentyn (sous Linux, avec comme nom Quentyn-PC) s'est connecté(e) à 14:32:10 à l'addresse ip : 192.168.0.12
const line =
  "L'utilisateur " +
  user +
  " (sous " +
  osType +
  ", avec comme nom " +
  machineName +
  ") s'est connecté(e) à " +
  timeStr +
  " à l'addresse ip : " +
  ip.address() + //on la déclare comme ça parce que c'est avec npm, avec un os ça marche pas, l'ip n'est pas reconnu et affiche "[object]"
  "\n"; //le \n permet de faire un retour à la ligne

// Écrit la ligne de log à la fin du fichier.
// Si le fichier n’existe pas, il est créé automatiquement.
// Si le fichier existe déjà (exécuté plusieurs fois dans la journée), ça ajoute une nouvelle ligne. cette ligne sert à écrire dans le logs_2025-05-13
fs.appendFileSync(logFile, line, "utf8"); //la syntaxe c'est ça en gros : fs.appendFileSync(chemin_du_fichier, contenu_à_ajouter, encodage);

// On lit le contenu complet du fichier de log et on l'affiche dans la console
// Cela permet de voir toutes les connexions enregistrées dans la journée
console.log(fs.readFileSync(logFile, "utf8")); //la syntaxe c'est ça en gros : fs.readFileSync(chemin_du_fichier, encodage);
