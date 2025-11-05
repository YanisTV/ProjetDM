function shortestWord() {
  let tab = ["chat", "lait", "eau", "poney"];
  let min = tab.reduce((a, b) => (a.length <= b.length ? a : b));
  console.log(min);
}
