function occurance(arr, target) {
  if (arr.length < 1) return 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
    }
  }
  return count;
}

console.log(occurance([1, 2, 3, 4], 4));
console.log(occurance([22, 33, 4, 5], 6));
console.log(occurance([22, -33, -4, -5, 0, 22], 22));
