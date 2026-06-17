function solution(s, n) {
  const convertAsciiCode = [...s].map((str) => str.charCodeAt(str));

  convertAsciiCode.forEach((number, index) => {
    // 대문자
    if (number >= 65 && number <= 90) {
      for (let i = 1; i <= n; i++) {
        if (number > 90) number = 65;
        number += 1;
      }

      convertAsciiCode[index] = number > 90 ? 65 : number;
    }

    // 소문자
    if (number >= 97 && number <= 122) {
      for (let i = 1; i <= n; i++) {
        if (number > 122) number = 97;
        number += 1;
      }

      convertAsciiCode[index] = number > 122 ? 97 : number;
    }
  });

  const result = convertAsciiCode
    .map((str) => String.fromCharCode(str))
    .join("");

  return result;
}

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
