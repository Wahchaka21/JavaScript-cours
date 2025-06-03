// avec express.JS ça donnerais ->
//sur postman
const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  const data = fs.readFileSync("users.json", "utf-8");
  res.send(data);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  const file = fs.readFileSync("users.json", "utf-8");
  const users = JSON.parse(file);
  users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.send("Utilisateur créé");
});

app.put("/users/3", (req, res) => {
  const updateUser = req.body;
  const file = fs.readFileSync("users.json", "utf-8");
  const users = JSON.parse(file);
  const index = users.findIndex((u) => u.id === 3);

  if (index !== -1) {
    users[index] = updateUser;
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    res.send("Utilisateur mis à jour !");
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  console.log("Serveur Express en ligne sur http://localhost:3000/users");
});
