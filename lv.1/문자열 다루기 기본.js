function solution(s) {
  const notNumber = [...s].filter((number) => isNaN(number));

  if (notNumber.length || (s.length !== 4 && s.length !== 6)) return false;
  return true;
}

solution("10e1");
solution("0x16");
solution("1234");
