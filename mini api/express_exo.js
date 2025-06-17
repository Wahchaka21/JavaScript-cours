//Requête GET exemple de base :

const express = require("express") //équivalent de const http = require("http")
const fs = require("fs")
const app = express()


//exo 4 crée un middleware qui affiche la date et l'heure de chaque requête

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`)
    next()
})

app.get("/", (req, res) => {
    res.end("Bienvenue sur Express !")
})

// app.listen(5000, () => console.log("Serveur à l'écoute sur http://localhost:5000"))


//exo 1 crée un serveur Express avec deux routes qui affiche "Page D'accueil", et un /about qui affiche "A propos"


app.get("/", (req, res) => {
    res.end("Page d'accueil")
})

app.get("/about", (req, res) => {
    res.end("A propos")
})

app.get("/user/:id", (req, res) => {
    res.end(`Utilisateur #${req.params.id}`)
})


/*exo 2 crée une route /hello/:name qui affiche "bonjour <name>"
Bonus: si ?age=20 est passé, affiche aussi l'age avec query parce que quand y a "?" s'est querry*/


app.get("/hello/:name", (req, res) => {

    let message = `Bonjour ${req.params.name}`;
    if (req.query.age) {
        message += `, tu as ${req.query.age} ans`;
    }

    console.log(req.params)
    console.log(req.query)

    res.end(message);
})

//Requête POST exemple :


app.use(express.urlencoded({extended: true})) //ligne à mettre obligatoirement pour utiliser méthode POST


//dans postman aller dans body et cocher x-www-form-urlencoded

app.post("/contact", (req, res) => {
    console.log(req.body)
    res.send(`Merci ${req.body.nom} pour ton message`)
})


/*exo 3 crée un formulaire HTML avec nom et message. Lors de l'envoie (POST sur /contact) afficher les infos reçues*/

//voir express_exo.html


//middleware exemple :

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})


//PUT et DELETE exemple :

app.post("/produits", (req, res) => res.send("Produit ajouté"))
app.put("produits/:id", (req, res) => res.send(`produit ${req.params.id} mis à jour`))
app.delete("/produits/:id", (req, res) => res.send(`Produit ${req.params.id} supprimé`))


app.listen(3000, () => console.log("serveur à l'écoute sur http://localhost:3000"))