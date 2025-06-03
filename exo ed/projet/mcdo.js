function prendreSaCommande(
  burger_choisi,
  probleme_grillade,
  bip_moi_quand_ta_fini
) {
  console.log("1. Je vais te préparer ton ", burger_choisi, ", gourmand VA");
  console.log("2. Je lance en cuisine le", burger_choisi);
  setTimeout(() => {
    if (!probleme_grillade) {
      console.log("3. Chacal, viens chercher ton", burger_choisi);
      bip_moi_quand_ta_fini(null, "BIP BIP");
    } else {
      console.log(
        "3. Ah gros on a cramé ton",
        burger_choisi,
        "je crois et on peut plus en faire mdrrrr"
      );
      bip_moi_quand_ta_fini("Déso frérot c'est grillé");
    }
  }, 3000);
}

prendreSaCommande("cheeseburger", true, (err, value) => {
  if (!err) {
    console.log(value);
    console.log("Alors là je vais chercher mon burger j'ai grave la dalle");
  } else {
    console.log(err);
    console.log("Je pue le seum azy gro SAYER ça part en big wrap");
    prendreSaCommande("wrap_New_York_de_malade", false, (err, value) => {
      if (!err) {
        console.log(value);
        console.log("ah enfin je peux graille my big wrap MMMMMMMMMMH");
      } else {
        console.log(err);
        console.log(
          "nan mais là je vais casser mon crâne enft appelle moi le manager (je m'appelle Karen)"
        );
      }
    });
  }
});
