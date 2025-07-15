function secondDuplicate(arr) {
  if (arr.length <= 1) return null;
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      return arr[i];
    }
    mp.set(arr[i], i);
  }
  return null;
}

console.log(secondDuplicate([1, 2, 3, 4, 3, 2, 1]));
console.log(secondDuplicate([1, 2, 3]));
