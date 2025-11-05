function calcMoy() {
  const notes = [12, 15, 10, 18];
  const moyenne = notes.reduce((a, b) => a + b) / notes.length;
  console.log("Moyenne =", moyenne);
}
