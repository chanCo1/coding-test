function solution(s) {
  let pCount = 0;
  let yCount = 0;

  [...s].forEach((str) => {
    if (str.toLowerCase() === "p") {
      pCount += 1;
    }

    if (str.toLowerCase() === "y") {
      yCount += 1;
    }
  });

  return pCount === yCount;
}

solution("pPoooyY");
solution("Pyy");
