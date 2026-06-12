function solution(my_string, queries) {
  let arrStrng = my_string.split("");

  queries.forEach(([start, end]) => {
    let prevIndex = start;
    let endIndex = end;

    while (prevIndex < endIndex) {
      const prevCacheString = arrStrng[prevIndex];
      const changeCacheString = arrStrng[endIndex];

      arrStrng[prevIndex] = changeCacheString;
      arrStrng[endIndex] = prevCacheString;

      prevIndex += 1;
      endIndex -= 1;
    }
  });

  return arrStrng.join("");
}

solution("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);
