function solution(a, b) {
  const date = new Date(2016, a - 1, b + 1);
  return date.toUTCString().slice(0, 3).toUpperCase();
}

solution(5, 24);
