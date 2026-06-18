function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
}

solution([1, 2, 3, 4]);
solution([5, 5]);
