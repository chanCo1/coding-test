function solution(my_strings, parts) {
  const result = parts.map(([start, end], index) => {
    return my_strings[index].slice(start, end + 1);
  });

  return result.join("");
}

solution(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ],
);
