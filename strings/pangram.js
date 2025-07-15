function pangram(s) {
  const set = new Set();
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch >= "a" && ch <= "z") {
      set.add(ch);
    }
  }

  return set.size === 26;
}
console.log(pangram("The quick brown fox jumps over the lazy dog"));