function solution(n) {
  return Number([...`${n}`].sort((a, b) => b - a).join(""));
}

solution(118372);
