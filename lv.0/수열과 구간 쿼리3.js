function solution(arr, queries) {
  queries.forEach((_, queryIndex) => {
    const prevCacheNumber = arr[queries[queryIndex][0]];
    const changeCacheNumber = arr[queries[queryIndex][1]];

    arr[queries[queryIndex][0]] = changeCacheNumber;
    arr[queries[queryIndex][1]] = prevCacheNumber;
  });

  console.log(arr)

  return arr;
}

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ],
);
