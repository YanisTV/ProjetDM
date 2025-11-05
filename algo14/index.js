export function shortestWord(tab) {
  return tab.reduce((a, b) => (a.length <= b.length ? a : b));
}
