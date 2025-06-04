// avec express.JS ça donnerais ->
//sur postman
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); // Pour pouvoir lire le JSON envoyé dans le body

const filePath = "users.json";

// GET - Lire tous les utilisateurs
app.get("/users", (req, res) => {
  const data = fs.readFileSync(filePath, "utf-8");
  res.send(data);
});

// POST - Ajouter un utilisateur
app.post("/users", (req, res) => {
  const user = req.body;
  const file = fs.readFileSync(filePath, "utf-8");
  let users = JSON.parse(file);
  users.push(user);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.send("Utilisateur créé");
});

// PUT - Modifier un utilisateur par ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;

  const file = fs.readFileSync(filePath, "utf-8");
  let users = JSON.parse(file);
  const index = users.findIndex((u) => u.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.send("Utilisateur modifié");
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
});

// DELETE - Supprimer un utilisateur par ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const file = fs.readFileSync(filePath, "utf-8");
  let users = JSON.parse(file);
  const newUsers = users.filter((u) => u.id !== id);

  if (newUsers.length === users.length) {
    res.status(404).send("Utilisateur non trouvé");
  } else {
    fs.writeFileSync(filePath, JSON.stringify(newUsers, null, 2));
    res.send("Utilisateur supprimé");
  }
});

// Lancer le serveur
app.listen(3000, () => {
  console.log("Serveur Express lancé sur http://localhost:3000/users");
});
