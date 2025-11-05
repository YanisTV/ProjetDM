function codesPostaux() {
  let dept = "69",
    i = 0,
    tab = [];
  while (i < 1000) {
    tab.push(dept + String(i).padStart(3, "0"));
    i++;
  }
  console.log(tab);
}
