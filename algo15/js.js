function division() {
  function div(a, b) {
    if (b === 0) throw "Division par zéro impossible !";
    return a / b;
  }

  try {
    console.log(div(10, 2));
    console.log(div(5, 0));
  } catch (e) {
    console.error(e);
  }
}
