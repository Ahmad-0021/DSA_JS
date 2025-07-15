function isSorted(arr) {
  if (arr.length < 1) return false;
  if (arr.length == 1) return true;

  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[j]) {
      return false;
    }
    j++;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([11, 22, 3, 4]));
