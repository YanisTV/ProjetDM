function randomFind() {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
  let n = 50;
  console.log(arr);
  console.log("Présent ?", arr.includes(n));
}
