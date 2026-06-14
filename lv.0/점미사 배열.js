function solution(my_string) {
  const strings = my_string.split("");

  const result = strings.map((str, index) => {
    return strings.slice(-index).join("");
  });

  return result.sort();
}

solution("programmers");
