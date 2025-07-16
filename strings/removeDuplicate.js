function removeDuplicate(s) {
  let set = new Set();
  let newStr = "";

  for (let char of s) {
    if (!set.has(char)) {
      set.add(char);
      newStr += char;
    }
  }

  return newStr;
}
console.log(removeDuplicate("programming"));
