function solution(arr) {
  const filtered = arr.filter((number) => number > Math.min(...arr));
  return filtered.length ? filtered : [-1];
}

solution([4, 3, 2, 1]);
solution([10]);
