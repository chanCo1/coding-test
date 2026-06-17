function solution(s) {
  const split = s.split(" ");

  const result = split.map((str) => {
    const _str = [];

    [...str].forEach((string, index) => {
      string = index % 2 === 0 ? string.toUpperCase() : string.toLowerCase();
      _str.push(string);
    });

    return _str.join("");
  });

  return result.join(" ");
}

solution("try hello world");
