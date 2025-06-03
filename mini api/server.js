//sur postman
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    const data = fs.readFileSync("users.json", "utf-8");
    res.end(data);
  } else if (req.url === "/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      const file = fs.readFileSync("users.json", "utf-8");
      let tableauUsers = JSON.parse(file);
      tableauUsers.push(user);
      fs.writeFileSync("users.json", JSON.stringify(tableauUsers));
      res.end("Utilisateur créé");
    });
  } else if (req.url.substring(0, 7) === "/users/" && req.method === "PUT") {
    const tabUrl = req.url.split("/");
    const idUser = parseInt(tabUrl[2]);
    //console.log(idUser);
    const file = fs.readFileSync("users.json", "utf-8");
    let tableauUsers = JSON.parse(file);
    //console.log(tableauUsers);
    const index = tableauUsers.findIndex((u) => u.id === idUser);
    //console.log(index, idUser);
    if (index !== -1) {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const user = JSON.parse(body);
        tableauUsers[index].nom = user.nom;
        fs.writeFileSync("users.json", JSON.stringify(tableauUsers));
        res.end("utilisateur modifié");
      });
    } else {
      res.end("utilisateur non trouvé");
    }
  } else if (req.url === "/users/" && req.method === "DELETE") {
    //a voir le delete
  } else {
    res.statusCode = 404;
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000/users");
});
