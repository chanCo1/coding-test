function solution(n, control) {
  let calc = n;

  const covertControl = control
    .toLowerCase()
    .split("")
    .map((str) => {
      if (str === "w") return 1;
      if (str === "s") return -1;
      if (str === "d") return 10;
      if (str === "a") return -10;
    });

  covertControl.forEach((number) => {
    calc += number;
  });

  return calc;
}

solution(0, "wsdawsdassw");
