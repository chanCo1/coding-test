function solution(num) {
  let number = num;
  let count = 0;

  while (number > 1 && count <= 500) {
    number = number % 2 === 0 ? number / 2 : number * 3 + 1;
    count++;
  }

  return count >= 500 ? -1 : count;
}

solution(6);
solution(626331);
