const express = require('express');
const fs = require('fs')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    next()
})

app.get('/tasks', (req, res) => {
    res.send(fs.readFileSync('tasks.json', 'UTF-8'))
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.post('/tasks', (req, res) => {
    console.log(req.body)
    const task = {"id": req.body.id, "nom": req.body.nom}
    const file = fs.readFileSync('tasks.json', 'UTF-8')
    let tableauTasks = JSON.parse(file)
    tableauTasks.push(task)
    fs.writeFileSync('tasks.json', JSON.stringify(tableauTasks))
    res.send('Task créée')
});

app.put('/tasks/:id', (req, res) => {
    const idTask = req.params.id
    const file = fs.readFileSync('tasks.json', 'UTF-8')
    let tableauTasks = JSON.parse(file)
    const index = tableauTasks.findIndex(t => t.id == idTask)
    if (index !== -1) {
      
        const nomModifie = req.body.nom

        tableauTasks[index].nom = nomModifie
        
        fs.writeFileSync('tasks.json', JSON.stringify(tableauTasks))

        res.send("Tache modifiée")

    } else {
      res.send('Tache non trouvée')
    }
});

app.delete('/tasks/:id', (req, res) => {
    const idTask = req.params.id
    const file = fs.readFileSync('tasks.json', 'UTF-8')
    let tableauTasks = JSON.parse(file)
    
    const nouveauTableau = tableauTasks.filter(t => t.id != idTask)
    
    fs.writeFileSync('tasks.json', JSON.stringify(nouveauTableau))

    res.send("Tache supprimée")

});


app.listen(3000, () => console.log('Serveur à l’écoute sur http://localhost:3000'));