function solution(n) {
  return [...`${n}`].reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

solution(123);
solution(987);
