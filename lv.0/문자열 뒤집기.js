function solution(my_string, s, e) {
  const splitStr = my_string.split("");

  let startIndex = s;
  let endIndex = e;

  while (startIndex < endIndex) {
    const cacheStart = splitStr[startIndex];
    const cacheEnd = splitStr[endIndex];

    splitStr[startIndex] = cacheEnd;
    splitStr[endIndex] = cacheStart;

    startIndex += 1;
    endIndex -= 1;
  }

  return splitStr.join('');
}

solution("Progra21Sremm3", 6, 12);
