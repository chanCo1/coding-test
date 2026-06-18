function solution(x) {
  const sum = [...`${x}`].reduce((acc, cur) => acc + Number(cur), 0);
  return Number.isInteger(x / sum);
}

solution(10);
solution(12);
solution(11);
solution(13);
