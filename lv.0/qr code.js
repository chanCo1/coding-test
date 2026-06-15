function solution(q, r, code) {
  const splitStr = code.split("");

  const result = splitStr.filter((str, index) => {
    if (index % q === r) return str;
  });

  return result.join("");
}

// solution(3, 1, "qjnwezgrpirldywt");
solution(1, 0, "programmers");
