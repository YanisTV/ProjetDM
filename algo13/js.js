function randomSplit() {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
  let low = arr.filter((x) => x < 50);
  let high = arr.filter((x) => x >= 50);

  console.log("Base:", arr);
  console.log("<50 :", low);
  console.log(">=50 :", high);
}
