function solution(num_list) {
  const multy = num_list.reduce((acc, cur) => acc * cur);
  const squareRoot = num_list.reduce((acc, cur) => acc + cur) ** 2;

  return multy < squareRoot ? 1 : 0;
}

solution([3, 4, 5, 2, 1]);
