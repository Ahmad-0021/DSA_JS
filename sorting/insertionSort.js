function Insertion(arr, elem) {
  arr.push(0); // first create free space
  for (let i = arr.length - 2; i >= 0; i--) {
    // start loop from second last
    if (arr[i] > elem) {
      arr[i + 1] = arr[i];
    } else {
      arr[i+1] = elem;
      return arr;
    }
  }
  arr[0] = elem;
  return arr;
}

console.log(Insertion([1, 2, 3, 5, 10], 4));
