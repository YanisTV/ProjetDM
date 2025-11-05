export function calcMoy(notes) {
  return notes.reduce((a, b) => a + b) / notes.length;
}
