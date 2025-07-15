function sum(arr) {
  if (arr.length < 1) return 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([22, 33, 4, 5]));
console.log(sum([22, -33, -4, -5, 0]));
