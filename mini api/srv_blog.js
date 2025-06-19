const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "srv_blog.html"))
})

app.get("/route/:categorie/:theme", (req, res)=>{
    const categories = req.params.categorie
    const themes = req.params.theme
    const file = fs.readFileSync("articles.json", "utf-8")
    let tableau = JSON.parse(file)
    const filtrer = tableau.filter(a => a.categorie === categories && a.theme === themes) 
    
    res.json(filtrer)
})

app.post("/route/ajouter", (req, res)=>{
    const content = {"titre": req.body.titre, "categorie": req.body.categorie, "theme": req.body.theme} 
    const file = fs.readFileSync("articles.json", "utf-8")
    let articles = JSON.parse(file)
    let maxId = 0
    articles.forEach(article =>{
        if (article.id > maxId) {
            maxId = article.id
        }
    })
    const newId = maxId + 1
    content.id = newId
    articles.push(content)
    fs.writeFileSync("articles.json", JSON.stringify(articles))
    
    res.send("Créée")
})




app.listen(port, () => {
    console.log(`Serveur en ligne sur http://localhost:${port}`)
})
