const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Page d'accueil");
  } else if (req.url === "/contact") {
    res.end("Page de contact");
  } else {
    res.statusCode = 404;
    res.end("Page non trouvée");
  }
});

server.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000/");
});

//avec l'html
const html = `
<html>
    <head><title>Mon site</title></head>
    <body><h1>Bienvenue sur mon site</h1></body>
</html>
`;
res.setHeader("Content-Type", "text/html");
res.end(html);
