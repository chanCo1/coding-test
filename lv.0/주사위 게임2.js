function solution(a, b, c) {
  // 계산 공식
  const sumFormula = a + b + c;
  const squareRoot = a ** 2 + b ** 2 + c ** 2;
  const cubeRoot = a ** 3 + b ** 3 + c ** 3;

  const allDiff = sumFormula;
  const twoSame = sumFormula * squareRoot;
  const allSame = sumFormula * squareRoot * cubeRoot;

  // 모두 다를 경우
  if (a !== b && a !== c && b !== c) {
    return allDiff;
  }

  // 모두 같을 경우
  if (a === b && a === c && b === c) {
    return allSame;
  }

  return twoSame;
}

solution(2, 6, 1);
solution(5, 3, 3);
solution(1, 1, 1);
