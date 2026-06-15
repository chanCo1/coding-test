function solution(my_string) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  const allAlphabet = [
    ...ALPHABET.split("").map((bet) => bet.toUpperCase()),
    ...ALPHABET.split(""),
  ];

  const result = allAlphabet.map((str, index) => {
    let count = 0;

    [...my_string].forEach((myString) => {
      if (myString === str) count += 1;
    });

    return count;
  });

  return result;
}

solution("Programmers");
