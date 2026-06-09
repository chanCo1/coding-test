function solution(intStrs, k, s, l) {
  const convertStr = intStrs.map((str) => Number(str.slice(s, s + l)));
  return convertStr.filter((str) => str > k);
}

solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);
