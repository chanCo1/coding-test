function solution(my_string, index_list) {
  const result = index_list.map((number) => my_string[number]);
  return result.join("");
}

solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]);
solution("zpiaz", [1, 2, 0, 0, 3]);
