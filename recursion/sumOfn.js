function sumOfN(n) {
  let sum = 0;
  if (n == 0) {
    return sum;
  }
  sum += n;
  sumOfN(n - 1);
}
console.log(sumOfN(4));
