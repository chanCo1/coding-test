function solution(phone_number) {
  const frontSlice = phone_number.slice(0, phone_number.length - 4);
  const backSlice = phone_number.slice(phone_number.length - 4);

  const chagneStar = frontSlice
    .split("")
    .map((str) => "*")
    .join("");

  return chagneStar + backSlice;
}

solution("01033334444");
