function solution(num_list) {
  const listLength = num_list.length;
  const prevNumber = num_list[listLength - 2];
  const lastNumber = num_list[listLength - 1];

  if (prevNumber < lastNumber) {
    return [...num_list, lastNumber - prevNumber];
  } else {
    return [...num_list, lastNumber * 2];
  }
}

solution([2, 1, 6]);
solution([5, 2, 1, 7, 5]);
