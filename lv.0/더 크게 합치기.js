function solution(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  return Math.max(Number(stringA + stringB), Number(stringB + stringA));
}

solution(9, 91);
