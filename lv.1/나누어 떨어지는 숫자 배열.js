function solution(arr, divisor) {
  const filtered = arr
    .filter((number) => number % divisor === 0)
    .sort((a, b) => a - b);

  return filtered.length ? filtered : [-1];
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
