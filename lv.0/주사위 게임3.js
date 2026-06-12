function solution(a, b, c, d) {
  /** 모두 같을 경우 */
  const calcAllSame = (p) => 1111 * p;
  /** 하나만 다를 경우 */
  const calcOneDiff = (p, q) => (10 * p + q) ** 2;
  /** 두개씩 같을 경우 */
  const calcEachTwoSame = (p, q) => (p + q) * Math.abs(p - q);
  /** 두개는 같고 나머지는 다를 경우 */
  const calcTwoSameRestDiff = (q, r) => q * r;

  const diceNumber = [a, b, c, d];
  const filteredDuplicate = diceNumber.filter(
    (number, index) => diceNumber.indexOf(number) !== index,
  );

  // 모두 같을 경우
  if (filteredDuplicate.length >= 3) {
    return calcAllSame(filteredDuplicate[0]);
  }

  if (filteredDuplicate.length >= 2) {
    // 하나만 다를 경우
    if (filteredDuplicate[0] === filteredDuplicate[1]) {
      const getOneDiff = diceNumber.find(
        (num) => !filteredDuplicate.includes(num),
      );

      return calcOneDiff(filteredDuplicate[0], getOneDiff);
    }

    // 두개씩 같을 경우
    if (filteredDuplicate[0] !== filteredDuplicate[1]) {
      return calcEachTwoSame(filteredDuplicate[0], filteredDuplicate[1]);
    }
  }

  // 두개는 같고 나머지는 다를 경우
  if (filteredDuplicate.length >= 1) {
    const getTwoDiff = diceNumber.filter(
      (num) => !filteredDuplicate.includes(num),
    );
    return calcTwoSameRestDiff(getTwoDiff[0], getTwoDiff[1]);
  }

  // 모두 다를 경우
  if (!filteredDuplicate.length) {
    return Math.min(...diceNumber);
  }
}

solution(2, 2, 2, 2);
solution(4, 1, 4, 4);
solution(6, 3, 3, 6);
solution(2, 5, 2, 6);
solution(6, 4, 2, 5);
