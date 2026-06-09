function solution(a, d, included) {
  const mapped = included.map((included, index) => {
    if (included) {
      return a + d * index;
    }
  });

  const filtered = mapped.filter((number) => number);
  return filtered.reduce((acc, cur) => acc + cur, 0);
}

solution(3, 4, [true, false, false, true, true]);
