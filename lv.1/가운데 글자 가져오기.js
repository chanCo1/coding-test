function solution(s) {
  const isEven = s.length % 2 === 0;
  const getIndex = Math.round(s.length / 2) - 1;

  const filtered = [...s].filter((str, index) => {
    if (
      isEven ? index === getIndex || index === getIndex + 1 : index === getIndex
    ) {
      return str;
    }
  });

  return filtered.join("");
}

solution("abcde");
solution("qwer");
