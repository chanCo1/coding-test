function solution(n) {
  const isOdd = n % 2;

  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (isOdd) {
      result += i % 2 ? i : 0;
    } else {
      result += i % 2 ? 0 : i ** 2;
    }
  }

  return result;
}

solution(10);
