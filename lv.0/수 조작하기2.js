function solution(numLog) {
  let result = [];

  numLog.forEach((number, index, arr) => {
    if (arr[index - 1] === undefined) return;

    if (arr[index - 1] < number) {
      number - arr[index - 1] < 10 ? result.push("w") : result.push("d");
    } else {
      arr[index - 1] - number < 10 ? result.push("s") : result.push("a");
    }
  });

  return result.join("");
}

solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
