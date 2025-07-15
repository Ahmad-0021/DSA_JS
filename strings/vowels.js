function vowels(s) {
  s = s.toLowerCase();
  let count = 0;
   const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowels("scl"));
console.log(vowels("DSA IS FUN"));
