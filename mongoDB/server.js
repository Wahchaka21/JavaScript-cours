const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test') //c'est ici qu'on va decider du nom de la base de donnée, ici "test"
    .then(()=> console.log("connecté à mongoDB"))
    .catch(err => console.error("Erreur de connexion à MongoDB", err)
)

const taskSchema = new mongoose.Schema({ //on attribue ici ce qu'on va mettre à chaque élément, ici on lui mettra un nom et une durée
    nom: {
        type: String,
        required: true
    },
    duree: {
        type: Number,
    }
})

const Task = mongoose.model("task", taskSchema)


//ajouter
async function createTask() {
    const tache1 = new Task({nom: "Tache 1", duree: 100})
    await tache1.save()

    const tache2 = new Task({nom: "Tache 2"})
    await tache2.save()

    console.log("tache ajoutée")
}

async function getTasks() {
    const tasks = await Task.find()
    console.log(tasks)
}

// createTask().then(() => getTasks())


//modifier
async function updateTask(id) {
    const result = await Task.updateOne({_id: id}, {
        $set: {
            nom: "Tache 1.5",
            duree: 30
        }
    })
    console.log(result)
}

// updateTask("685a992400c6940fbe55dff2")


//supprimer
async function deleteTask(id) {
    const result = await Task.deleteOne({_id: id})
    console.log(result)
}

deleteTask("685a992400c6940fbe55dff2")