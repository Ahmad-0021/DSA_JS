function selectionSort(arr) {
  let sorted = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[sorted]) {
      [arr[sorted], arr[i]] = [arr[i], arr[sorted]];
      sorted++;
    }
  }
  return arr;
}
let arr = [5, 2, 4, 6];
console.log(selectionSort(arr));
