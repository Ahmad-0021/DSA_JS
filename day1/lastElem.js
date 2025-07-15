function lastElem(arr) {
  if (arr.length < 1) return null;
  return arr[arr.length - 1];
}

console.log(lastElem([1, 2, 3, 4]));
console.log(lastElem([22, 33, 4, 5]));
console.log(lastElem([22, -33, -4, -5, 0, 22]));
