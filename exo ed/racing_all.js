const p1 = new Promise((resolve) => setTimeout(() => resolve("p1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("p2"), 2000));

//Attends que les deux soient effectués
Promise.all([p1, p2]).then((results) => {
  console.log(results);
});

//S'affiche dès qu'un des deux est effectué
Promise.race([p1, p2]).then((results) => {
  console.log(results);
});
