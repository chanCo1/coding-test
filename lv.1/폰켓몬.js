function solution(nums) {
  const maxLength = nums.length / 2;
  const phoneketmon = nums.filter(
    (number, index) => nums.indexOf(number) === index,
  );

  return Math.min(maxLength, phoneketmon.length);
}

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
