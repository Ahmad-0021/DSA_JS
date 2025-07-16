function compress(s) {
  let count = 1;
  let str = "";
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      count++;
    } else {
      str += s[i - 1] + (count > 1 ? count : "");
      count = 1;
    }
  }
  str += s[s.length - 1] + (count > 1 ? count : "");
  return str;
}
console.log(compress("aaabbc"));
