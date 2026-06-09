function solution(num_list) {
  let oddStr = '';
  let evenStr = '';

  for (const number of num_list) {
    if (number % 2 === 0) oddStr += String(number);
    if (number % 2 !== 0) evenStr += String(number);
  }

  return Number(oddStr) + Number(evenStr);
}

solution([3, 4, 5, 2, 1]);
