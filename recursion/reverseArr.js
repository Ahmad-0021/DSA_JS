function reverseArr(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArr(arr, start + 1, end - 1);
}
console.log(reverseArr([1, 2, 3, 4, 5]));
