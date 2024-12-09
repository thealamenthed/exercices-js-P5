const printNumbers = (n) => {
  let total = "";
  let i = 0;

  for (i = 1; i <= n; i++) {
    total += i;
    if (i < n) total += " ";
  }
  return total;
};

export default printNumbers;
