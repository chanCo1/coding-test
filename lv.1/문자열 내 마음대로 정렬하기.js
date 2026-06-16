function solution(strings, n) {
  const result = strings
    .sort()
    .sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());

  return result;
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);
