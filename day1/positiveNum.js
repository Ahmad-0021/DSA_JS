function positiveNum(arr) {
  if (arr.length < 1) return null;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }
  return count;
}

console.log(positiveNum([1, 2, 3, 4]));
console.log(positiveNum([22, 33, 4, 5]));
console.log(positiveNum([22, -33, -4, -5,0]));
