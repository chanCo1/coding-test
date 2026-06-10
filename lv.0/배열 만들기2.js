function solution(l, r) {
  let number = [];

  for (let i = l; i <= r; i++) {
    number.push(`${i}`);
  }

  const result = number
    .filter(
      (num) =>
        !num.includes("1") &&
        !num.includes("2") &&
        !num.includes("3") &&
        !num.includes("4") &&
        !num.includes("6") &&
        !num.includes("7") &&
        !num.includes("8") &&
        !num.includes("9"),
    )
    .map(Number);
  
  return result.length ? result : [-1];
}

solution(5, 555);
solution(10, 20);
solution(6, 10);
