function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1); //str.charAt(0) renvoie le premier caractère de la chaîne str, et str.slice(1) renvoie le reste de la chaîne à partir du deuxième caractère.
}

function reverse(str) {
  return str.split("").reverse().join(""); //str.split("") divise la chaîne en un tableau de caractères, reverse() inverse l'ordre des éléments du tableau, et join("") les réassemble en une chaîne.
}

module.exports = {
  capitalize,
  reverse,
};
