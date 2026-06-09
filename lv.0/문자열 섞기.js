function solution(str1, str2) {
  const result = Array.from(str1).map((str, index) => str + str2[index]);
  return result.join('');
}

solution("aaaaa", "bbbbb");
