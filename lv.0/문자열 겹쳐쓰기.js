function solution(my_string, overwrite_string, s) {
  const myString = my_string.slice(0, s);
  const endString = my_string.slice(overwrite_string.length + s, my_string.length);

  return myString + overwrite_string + endString;
}

// solution("He11oWor1d", "lloWorl", 2);
solution("Program29b8UYP", "merS123", 7);
