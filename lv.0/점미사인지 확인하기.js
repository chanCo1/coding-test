function solution(my_string, is_suffix) {
  const strings = my_string.split("");

  const result = strings.map((str, index) => {
    return strings.slice(-index).join("");
  });

  return result.includes(is_suffix) ? 1 : 0;
}

solution("banana", "ana");
solution("banana", "nan");
solution("banana", "wxyz");
solution("banana", "abanana");
