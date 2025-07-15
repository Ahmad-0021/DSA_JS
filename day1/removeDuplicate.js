//  remove duplicates

let removeDuplicate = (arr) => {
  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  console.log(arr);
  return j + 1;
}; // return length of uniques elem

console.log(removeDuplicate([1, 1, 2]));
