function moment() {
  let h = 21;

  if (h >= 6 && h < 12) console.log("Matin");
  else if (h < 18) console.log("Après-midi");
  else if (h < 24) console.log("Soirée");
  else console.log("Nuit");
}
