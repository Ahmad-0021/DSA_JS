function evenNumbers(arr) {
  if (arr.length < 1) return null;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));
console.log(evenNumbers([1, 3]));
