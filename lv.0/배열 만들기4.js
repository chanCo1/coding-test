function solution(arr) {
  let stk = [];

  let i = 0;
  while (i <= arr.length - 1) {
    if (!stk.length) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }

  console.log(stk);
  return stk;
}

solution([1, 4, 2, 5, 3]);
