function solution(a, b) {
  const [_a, _b] = [a, b].sort((a, b) => a - b);

  let result = 0;
  for (let i = _a; i <= _b; i++) {
    result += i;
  }

  return result;
}

solution(3, 5);
solution(3, 3);
solution(5, 3);
