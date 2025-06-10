const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Middleware pour parser les données de formulaire (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Route pour renvoyer la page HTML
app.get(["/", "/index.html"], (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "index.html"));
  res.setHeader("Content-Type", "text/html");
  res.end(data);
});

// Route pour le CSS
app.get("/style.css", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "style.css"));
  res.setHeader("Content-Type", "text/css");
  res.end(data);
});

// Route pour renvoyer la liste des utilisateurs en JSON
app.get("/users", (req, res) => {
  const file = fs.readFileSync("users.json", "utf-8");
  res.setHeader("Content-Type", "application/json");
  res.end(file);
});

// Ajouter un utilisateur
app.post("/add-user", (req, res) => {
  const parsed = req.body;
  const file = fs.readFileSync("users.json", "utf-8");
  const users = JSON.parse(file);

  // Créer un nouvel id (max +1) sans ternaire ni spread
  let newId;
  if (users.length > 0) {
    const ids = users.map(function (user) {
      return user.id;
    });

    let maxId = ids[0];
    for (let i = 1; i < ids.length; i++) {
      if (ids[i] > maxId) {
        maxId = ids[i];
      }
    }
    newId = maxId + 1;
  } else {
    newId = 1;
  }

  const newUser = {
    id: newId,
    name: parsed.name,
    email: parsed.email,
  };
  users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.redirect("/");
});

// Modifier un utilisateur
app.post("/modify-user", (req, res) => {
  const parsed = req.body;
  const idUser = parseInt(parsed.id);
  const file = fs.readFileSync("users.json", "utf-8");
  let users = JSON.parse(file);

  const index = users.findIndex((u) => u.id === idUser);
  if (index !== -1) {
    if (parsed.name) users[index].name = parsed.name;
    if (parsed.email) users[index].email = parsed.email;
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    res.redirect("/");
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
});

// Supprimer un utilisateur
app.post("/delete-user", (req, res) => {
  const parsed = req.body;
  const idUser = parseInt(parsed.id);
  const file = fs.readFileSync("users.json", "utf-8");
  let users = JSON.parse(file);
  users = users.filter((u) => u.id !== idUser);
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.redirect("/");
});

// Route 404
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
