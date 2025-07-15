// find min and maximum from the array

let minMax = (arr) => {
  let min = arr[0];
  let max = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
};

let arr = [56, 34, 55, 42, 2];
console.log(minMax(arr));

const reverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(reverse(arr));

let chekSortedArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(chekSortedArr([1, 2, 3]));

// remove duplicates

const removeDuplicate = (arr) => {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
};
console.log(removeDuplicate([1, 1, 2, 2, 3]));

let removeVal = (arr, val) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[j] = arr[i];
      j++;
    }
  }
  console.log({ arr });

  return j;
};
let remove = removeDuplicate([3, 2, 2, 3], 3);
console.log({ remove });
