function generate() {
  let n = 5;
  let r = "";
  for (let i = 1; i <= n; i++) r += String(i).repeat(i);
  console.log(r);
}
