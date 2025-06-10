const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // Route pour renvoyer la page HTML
  if ((req.url === "/" || req.url === "/index.html") && req.method === "GET") {
    const data = fs.readFileSync(path.join(__dirname, "index.html"));
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  }
  // Route pour le CSS
  else if (req.url === "/style.css") {
    const data = fs.readFileSync(path.join(__dirname, "style.css"));
    res.setHeader("Content-Type", "text/css");
    res.end(data);
  }
  // Route pour renvoyer la liste des utilisateurs en JSON (API)
  else if (req.url === "/users" && req.method === "GET") {
    const file = fs.readFileSync("users.json", "utf-8");
    res.setHeader("Content-Type", "application/json");
    res.end(file);
  }
  // Ajouter un utilisateur via formulaire POST /add-user (x-www-form-urlencoded)
  else if (req.url === "/add-user" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsed = querystring.parse(body);
      const file = fs.readFileSync("users.json", "utf-8");
      const users = JSON.parse(file);
    
      // Créer un nouvel id (max +1) sans ternaire ni spread
      let newId;
    
      if (users.length > 0) {
        // Récupérer tous les ids dans un tableau
        const ids = users.map(function(user) {
          return user.id;
        });
    
        // Trouver le max dans ids
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
    
      // Rediriger vers la page d'accueil pour voir la liste mise à jour
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
    
  }
  // Modifier un utilisateur via formulaire POST /modify-user
  else if (req.url === "/modify-user" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsed = querystring.parse(body);
      const idUser = parseInt(parsed.id);
      const file = fs.readFileSync("users.json", "utf-8");
      let users = JSON.parse(file);

      const index = users.findIndex(u => u.id === idUser);
      if (index !== -1) {
        if (parsed.name) users[index].name = parsed.name;
        if (parsed.email) users[index].email = parsed.email;
        fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      } else {
        res.statusCode = 404;
        res.end("Utilisateur non trouvé");
      }
    });
  }
  // Supprimer un utilisateur via formulaire POST /delete-user
  else if (req.url === "/delete-user" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsed = querystring.parse(body);
      const idUser = parseInt(parsed.id);
      const file = fs.readFileSync("users.json", "utf-8");
      let users = JSON.parse(file);
      users = users.filter(u => u.id !== idUser);
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000");
});
