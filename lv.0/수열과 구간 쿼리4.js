function solution(arr, queries) {
  queries.forEach((_, queryIndex) => {
    const startIndex = queries[queryIndex][0];
    const endIndex = queries[queryIndex][1];
    const multiple = queries[queryIndex][2];

    arr.forEach((number, index) => {
      if (index >= startIndex && index <= endIndex) {
        if (index % multiple === 0) {
          arr[index] += 1;
        }
      }
    });
  });

  return arr;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ],
);
