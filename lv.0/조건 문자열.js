function solution(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  }

  switch (ineq) {
    case ">":
      if (eq === "=") {
        return n >= m ? 1 : 0;
      } else {
        return n > m ? 1 : 0;
      }
    case "<":
      if (eq === "=") {
        return n <= m ? 1 : 0;
      } else {
        return n < m ? 1 : 0;
      }
  }
}

solution("<", "=", 20, 50);
