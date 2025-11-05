export function generate(n=5) {
  let r = "";
  for (let i = 1; i <= n; i++) r += String(i).repeat(i);
  return r
}
