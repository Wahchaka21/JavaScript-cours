const teams = ["Pablo", "Bruno", "Alice", "Luka", "Gael"];
const fails = [
  " est raciste",
  " a tiréy dans les nuages",
  " est en train d'AMIMIR",
  " a frappéy son pote",
  " s'est fait engueuler par rrrrrrremy",
];

function turn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(name + " est le goat");
      } else {
        const fail = fails[Math.floor(Math.random() * (fails.length - 1))];
        reject(name + fail);
      }
    }, 1200);
  });
}

const promises = teams.map(turn);
/* const promises = teams.map((e) => {
    return turn(e)
}) */
console.log(promises);

Promise.allSettled(promises).then((result) => {
  console.log(result);
});
