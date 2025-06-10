//sur postman
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    const file = fs.readFileSync("users.json", "utf-8");
    let tableauUsers = JSON.parse(file)

    let html = `<table>
                  <tr>
                    <td>Id</td>
                    <td>Nom</td>
                  </tr>`
  tableauUsers.forEach(elem => html += `<tr><td>` + elem.id + `</td><td>` + elem.nom + `</td><td>Modifier</td>` + `<td><button onclicks="supprimerUser(' + elem.id ' )">Supprimer</button></td>` + `</td></tr>` + `</td></tr>`)

  html += `</table>`

  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.end(html)
  } 
  else if (req.url === "/users" && req.method === "POST") {
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
  } 
  else if (req.url.substring(0, 7) === "/users/" && req.method === "PUT") {
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
    } 
    else {
      res.end("utilisateur non trouvé");
    }
  } else if (req.url.substring(0, 7) === "/users/" && req.method === "DELETE") {
    const tabUrl = req.url.split("/")
    const idUser = parseInt(tabUrl[2])
    const file = fs.readFileSync("users.json", "utf-8")
    let tableauUsers = JSON.parse(file)
    const nouveauTab = tableauUsers.filter((u) => u.id !== idUser)
    fs.writeFileSync("users.json", JSON.stringify(nouveauTab))
    res.end("Utilisateur supprimé")
  } 
  else {
    res.statusCode = 404;
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000/users");
});