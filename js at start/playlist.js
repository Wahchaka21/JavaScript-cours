let morceau1 = "musique1";
let morceau2 = "musique2";
let morceau3 = "musique3";

const playlist = [morceau1, morceau2, morceau3];
console.log(playlist);

let totalMorceaux = playlist.length;
//push ajoute un élément à la fin du tableau
playlist.push("musique4");
console.log(totalMorceaux, playlist.length, playlist);
//pop enlève le dernier élément du tableau
playlist.pop();
console.log(totalMorceaux, playlist.length, playlist);
//shift enlève le premier élément du tableau
playlist.shift();
console.log(totalMorceaux, playlist.length, playlist);
//unshift ajoute un élément au début du tableau
playlist.unshift("musique5");
console.log(totalMorceaux, playlist.length, playlist);
