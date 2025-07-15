function equalArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  arr1 = arr1.sort();
  arr2 = arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(equalArr([1, 2, 2, 3], [2, 1, 3, 2]));
console.log(equalArr([1, 2, 3], [1, 1, 2, 3]));
