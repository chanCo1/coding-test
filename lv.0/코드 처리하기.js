function solution(code) {
  const _code = code.split("");
  let result = "";
  let mode = false;

  _code.forEach((str, index) => {
    const currentIndex = index + 1;

    if (str === "1") {
      mode = !mode;
    }

    // 짝수
    if (mode) {
      if (currentIndex % 2 === 0 && str !== "1") {
        result += str;
      }
      // 홀수
    } else {
      if (currentIndex % 2 !== 0 && str !== "1") {
        result += str;
      }
    }
  });

  return result ? result : "EMPTY";
}

solution("abc1abc1abc");
