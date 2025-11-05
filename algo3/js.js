function prixTTC() {
  let ht = 100,
    tva = 20;
  let ttc = ht + (ht * tva) / 100;
  console.log("Prix TTC =", ttc);
}
