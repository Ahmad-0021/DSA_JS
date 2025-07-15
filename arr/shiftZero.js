// shift zeros at the end of arr

let shiftZero = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

console.log(shiftZero([0, 1, 0, 3, 12]));

const secondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }
  let first = -Infinity; //5
  let second = -Infinity; //3
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
};

console.log(secondLargest([5, 3, 9, 1, 6]));
