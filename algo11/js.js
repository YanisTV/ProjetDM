function countriesData() {
  const countries = [
    67595000, 9998000, 8417000, 1820631, 434403, 122273500, 82800000,
  ];
  console.log("Nombre pays =", countries.length);
  console.log(
    "Total habitants =",
    countries.reduce((a, b) => a + b)
  );
}
