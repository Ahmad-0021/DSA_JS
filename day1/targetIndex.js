function targetIndex(arr, t) {
  if (arr.length < 1) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
}

console.log(targetIndex([1, 2, 3, 4], 3));
console.log(targetIndex([22, 33, 4, 5], 5));
