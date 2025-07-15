function secondLargest(arr) {
  if (arr.length <= 1) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([4, 5, 2, 1]));
console.log(secondLargest([4, 5, 22, 19]));
