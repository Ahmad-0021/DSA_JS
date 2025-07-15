function missingNum(arr) {
  if (arr.length < 1) return null;
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  let missing = expectedSum - actualSum;
  return missing;
}

console.log(missingNum([0, 1, 3]));
