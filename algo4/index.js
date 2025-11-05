export function moment(h) {
  if (h >= 6 && h < 12) return "Matin";
  else if (h < 18) return "Après-midi";
  else if (h < 24) return "Soirée";
  else return "Nuit";
}
