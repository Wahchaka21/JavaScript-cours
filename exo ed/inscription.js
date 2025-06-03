/* simulation d'inscription utilisateur
l'idée est d'écrire une série de fonction utilisant des callbacs imbriqués
pour simuler le processus d'inscription d'un utilisateur
-vérification de l'existence de l'utilisateur,
-création du compte utilisateur
-envoie d'un email de confirmation

creer une variable tableau avec des utilisateurs deja existant pour verifier si le mail est disponible

sortie attendu :
Vérification de l'email : john.doe@example.com
L'email john.doe@example.com est disponible.
création de compte pour John Doe
compte crée pour john Doe avec ID : 1716701234567
envoie de l'email de confirmation à john.doe@example.com
email envoyé à john.doe@example.com
inscription complète pour john doe*/

let users = ["artoria.pendragon@example.com", "EKUSU.KARIBA@example.com"];

function verifierEmail(email, callback) {
  console.log("Vérification de l'email : " + email);
  setTimeout(() => {
    if (users.includes(email)) {
      console.log("L'email " + email + " est déjà utilisé.");
    } else {
      console.log("L'email " + email + " est disponible.");
      callback();
    }
  }, 1000);
}

function creerCompte(nom, email, callback) {
  console.log("création de compte pour " + nom);
  setTimeout(() => {
    const id = Math.floor(Math.random() * 1000000000000);
    console.log("compte crée pour " + nom + " avec ID : " + id);
    callback();
  }, 1000);
}

function envoyerEmailConfirmation(email, callback) {
  console.log("envoie de l'email de confirmation à " + email);
  setTimeout(() => {
    console.log("email envoyé à " + email);
    callback();
  }, 1000);
}

function inscriptionUtilisateur(nom, email) {
  verifierEmail(email, () => {
    creerCompte(nom, email, () => {
      envoyerEmailConfirmation(email, () => {
        console.log("inscription complète pour " + nom);
      });
    });
  });
}

inscriptionUtilisateur("John Doe", "john.doe@example.com");
