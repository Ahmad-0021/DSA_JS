// maximum number
const maximumNumber = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(maximumNumber([1, 2, 3, 4, 5]));
