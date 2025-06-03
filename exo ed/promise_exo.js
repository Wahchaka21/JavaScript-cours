/* Exercice 1

Écris une fonction attends(ms) qui retourne une Promise résolue 
après ms millisecondes.
Utilise-la pour afficher “Go !” après 2 secondes.

Exercice 2
Écris une fonction sommeAsync(a, b) qui retourne une Promise qui 
s’exécute en 1 seconde et retourne la somme de a + b.
Utilise .then() pour afficher le résultat.

Exercice 3
Avec deux fonctions f1 (3000ms) et f2 (5000ms) qui retournent chacune une Promise, 
utilise Promise.all pour attendre que les deux résultats soient prêts et 
les afficher dans un tableau. 
 */

// Exercice 1
function attends(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Go !");
    }, ms);
  });
}
attends(2000).then((result) => {
  console.log(result);
});

//exercice 2
function sommeAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

sommeAsync(58, 1628).then((result) => {
  console.log("resultat : " + result);
});

//exercice 3
const f1 = new Promise((resolve) => setTimeout(() => resolve("f1"), 3000));
const f2 = new Promise((resolve) => setTimeout(() => resolve("f2"), 5000));

Promise.all([f1, f2]).then((results) => {
  console.log(results);
});

//si on veut récuperer celle qui va le plus vite, donc f1
Promise.race([f1, f2]).then((result) => {
  console.log(result);
});

// const p1 = new Promise((resolve) => setTimeout(() => resolve("N"), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("I"), 2000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("G"), 3000));
// const p4 = new Promise((resolve) => setTimeout(() => resolve("G"), 4000));
// const p5 = new Promise((resolve) => setTimeout(() => resolve("A"), 5000));

// [p1, p2, p3, p4, p5].forEach((promise) => {
//   promise.then((letter) => {
//     process.stdout.write(letter); // Affiche chaque lettre dès que prête
//   });
// });
