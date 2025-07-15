//  two sum of the arr
const twoSum = (arr, target) => {
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (mp.has(diff)) {
      return [mp.get(diff), i];
    }
    mp.set(arr[i], i);
  }
  return null;
};

console.log(twoSum([1, 3, 5], 8));


