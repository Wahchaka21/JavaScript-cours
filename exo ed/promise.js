function createPromise(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + 2);
    }, 2000);
  });
}

createPromise(5)
  .then((result) => {
    console.log("resultat :", result);
  })
  .catch((err) => {
    console.log("error", err);
  });

function createPromiseRandomError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Succès !");
      } else {
        reject("Bah non.");
      }
    }, 2000);
  });
}

function calcOne(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + 1);
    }, 2000);
  });
}

function main() {
  createPromise(5)
    .then((result) => {
      console.log("Résultat :", result);
    })
    .catch((err) => {
      console.log("Erreur :", err);
    });
  createPromiseRandomError()
    .then((result) => {
      console.log("Résultat :", result);
    })
    .catch((err) => {
      console.log("Erreur :", err);
    });
  calcOne(6)
    .then((result) => {
      console.log("Résultat :", result);
      return calcOne(result);
    })
    .then((result) => {
      console.log("Résultat :", result);
      return calcOne(result);
    })
    .then((result) => {
      console.log("Résultat :", result);
      //return calcOne(result)
    })
    .catch((err) => {
      console.log("Erreur :", err);
    });
}

main();
