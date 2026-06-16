function solution(arr) {
  let result = [arr[0]];

  arr.reduce((acc, cur) => {
    if (acc !== cur) {
      result.push(cur);
    }
    return cur;
  });

  return result;
}

solution([1, 1, 3, 3, 0, 1, 1]);
