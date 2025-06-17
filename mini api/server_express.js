const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get(["/", "/server_express.html"], (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "server_express.html"));
  res.setHeader("Content-Type", "text/html");
  res.end(data);
});


app.get("/style.css", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "style.css"));
  res.setHeader("Content-Type", "text/css");
  res.end(data);
});


app.get("/tasks", (req, res) => {
  const file = fs.readFileSync("tasks.json", "utf-8");
  res.setHeader("Content-Type", "application/json");
  res.end(file);
});


app.post("/add-tasks", (req, res) => {
  const parsed = req.body;
  const file = fs.readFileSync("tasks.json", "utf-8");
  const tasks = JSON.parse(file);


  let newId;
  if (tasks.length > 0) {
    const ids = tasks.map(function (task) {
      return task.id;
    });

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

  const newTask = {
    id: newId,
    task: parsed.task
  };
  tasks.push(newTask);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));

  res.redirect("/");
});


app.put("/modify-task/:id", (req, res) => {
  const idTask = parseInt(req.params.id);
  const file = fs.readFileSync("tasks.json", "utf-8");
  const tasks = JSON.parse(file);

  const index = tasks.findIndex((t) => t.id === idTask);
  if (index !== -1) {
    if (req.body.task) tasks[index].task = req.body.task;
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
    res.send("Tâche modifiée !");
  } else {
    res.status(404).send("Tâche non trouvée");
  }
});


app.delete("/delete-task/:id", (req, res) => {
  const idTask = parseInt(req.params.id);
  const file = fs.readFileSync("tasks.json", "utf-8");
  let tasks = JSON.parse(file);

  const originalLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== idTask);

  if (tasks.length === originalLength) {
    return res.status(404).send("Tâche non trouvée");
  }

  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
  res.send("Tâche supprimée !");
});


app.use((req, res) => {
  res.status(404).send("Not Found");
});


app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
