export function prixTTC(ht, tva) {
  let ttc = ht + (ht * tva) / 100;
  console.log("Prix TTC =", ttc);
  return ttc;
}
