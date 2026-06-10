function solution(number) {
  const sum = number
    .split("")
    .reduce((arr, curr) => Number(arr) + Number(curr));

  return sum % 9;
}

solution("123");
solution("78720646226947352489");
