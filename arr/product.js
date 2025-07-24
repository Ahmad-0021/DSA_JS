function product(arr) {
  let newArr = [];

  let left = 1;
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = left;
    left *= arr[i];
  }
  let right = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[i] *= right;
    right *= arr[i];
  }
  return newArr;
}

console.log(product([1, 2, 3, 4]));
