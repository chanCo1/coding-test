function solution(arr, queries) {
  let result = [];

  queries.forEach((query, queryIndex) => {
    const sliced = arr.slice(query[0], query[1] + 1);

    const number = sliced.filter((number) => number > query[2]);
    const minNumber = number.length ? Math.min(...number) : -1;

    result.push(minNumber);
  });

  return result;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ],
);
