function removeTarget(arr, val) {
  if (arr.length <= 1) return null;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

console.log(removeTarget([1, 2, 2, 1, 3], 2));
console.log(removeTarget([1, 2, 2, 1, 3], 1));
