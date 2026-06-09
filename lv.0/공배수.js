function solution(number, n, m) {
  const modularN = number % n;
  const modularM = number % m;

  return modularN === 0 && modularM === 0 ? 1 : 0;
}

solution(60, 2, 3);
