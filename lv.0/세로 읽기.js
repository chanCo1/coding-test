function solution(my_string, m, c) {
  const strArr = my_string.split("");

  const matrix = [];

  let startIndex = 0;
  let endIndex = m;

  while (strArr.length >= endIndex) {
    matrix.push(strArr.slice(startIndex, endIndex));

    startIndex += m;
    endIndex += m;
  }

  const result = matrix.map((str, index) => str[c - 1]);
  return result.join("");
}

solution("ihrhbakrfpndopljhygc", 4, 2);
solution("programmers", 1, 1);
