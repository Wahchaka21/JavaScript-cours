/*
Objectif:
 Créer un serveur qui retourne du contenu différent selon l'url

 Routes: 
 / => paged'accueil
 /about => page à propos
 /contact => page de contact ==> retourne du html avec formulaire simple
 /404 => page d'erreur 404
*/
import http from "http"; // Utilisation de la syntaxe import
import nodemailer from "nodemailer"; // Importation de nodemailer pour l'envoi des e-mails
import { parse } from "querystring"; // Pour parser les données POST

// Configuration du serveur
const hostname = "127.0.0.1"; // Adresse locale
const port = 3000; // Port d'écoute

// Configuration de nodemailer
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "quentyn.petitjean@hotmail.com", // Remplacez par votre email
    pass: "**********", // Remplacez par votre mot de passe
  },
});

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    // Page d'accueil
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f0f8ff; text-align: center; padding: 50px; }
                        h1 { color: #4682b4; }
                    </style>
                </head>
                <body>
                    <h1>Bienvenue sur la page d'accueil</h1>
                    <p>Explorez notre site pour en savoir plus.</p>
                </body>
            </html>
        `);
  } else if (req.url === "/about" && req.method === "GET") {
    // Page à propos
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #fffaf0; text-align: center; padding: 50px; }
                        h1 { color: #ffa07a; }
                        p { color: #8b4513; }
                    </style>
                </head>
                <body>
                    <h1>À propos de nous</h1>
                    <p>Ceci est une page à propos. Nous sommes ravis de vous accueillir.</p>
                </body>
            </html>
        `);
  } else if (req.url === "/contact" && req.method === "GET") {
    // Page de contact avec formulaire simple
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f5f5dc; text-align: center; padding: 50px; }
                        h1 { color: #6b8e23; }
                        form { display: inline-block; text-align: left; }
                        label { display: block; margin: 10px 0 5px; }
                        input, textarea, button { padding: 10px; margin: 5px 0; width: 100%; }
                        textarea { height: 100px; }
                        button { background-color: #6b8e23; color: white; border: none; cursor: pointer; }
                        button:hover { background-color: #556b2f; }
                    </style>
                </head>
                <body>
                    <h1>Contactez-nous</h1>
                    <form method="POST" action="/submit-contact">
                        <label for="name">Nom:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Commentaire:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </body>
            </html>
        `);
  } else if (req.url === "/submit-contact" && req.method === "POST") {
    // Récupération des données du formulaire
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const formData = parse(body);

      // Configuration de l'e-mail
      const mailOptions = {
        from: "quentyn.petitjean@hotmail.com", // Remplacez par votre email
        to: "wahchaka@hotmail.com", // Remplacez par l'email du destinataire
        subject: "Nouveau message de contact",
        text: `
                    Nom: ${formData.name}
                    Email: ${formData.email}
                    Commentaire: ${formData.message}
                `,
      };

      // Envoi de l'e-mail
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Erreur lors de l'envoi de l'e-mail:", error);
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>Erreur lors de l'envoi du message</h1>");
        } else {
          console.log("E-mail envoyé:", info.response);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Message envoyé avec succès</h1>");
        }
      });
    });
  } else {
    // Page d'erreur 404
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #ffe4e1; text-align: center; padding: 50px; }
                        h1 { color: #ff4500; }
                        p { color: #a52a2a; }
                    </style>
                </head>
                <body>
                    <h1>Erreur 404</h1>
                    <p>La page que vous recherchez est introuvable.</p>
                </body>
            </html>
        `);
  }
});

server.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
//http://localhost:3000/contact
