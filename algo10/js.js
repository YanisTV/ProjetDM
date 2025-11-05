function fibonacci() {
  let max = 100;
  let test = [1, 2];
  while (test[test.length - 1] < max) {
    test.push(test[test.length - 1] + test[test.length - 2]);
  }
  console.log(test);
}
