function prevodBinarniNaDesitkovou(binarniString) {
  let result = 0;
  let index = 0;

  for (index = 0; index < binarniString.length; index++) {
    let cifra = binarniString.charAt(index);

    if (cifra !== "0" && cifra !== "1") {
      console.log("chybová hláška - cifra nemá binární hodnotu");
      return;
    }
    result = result * 2 + Number(cifra);
  }
  return result;
}

console.log(prevodBinarniNaDesitkovou("10"));
