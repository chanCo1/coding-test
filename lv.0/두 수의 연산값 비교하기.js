function solution(a, b) {
  const stringSum = Number(String(a) + String(b));
  const multiply = 2 * a * b;

  return Math.max(stringSum, multiply);
}

solution(91, 2);
