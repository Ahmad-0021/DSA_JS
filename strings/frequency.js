function frequency(s) {
  let mp = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mp.has(s[i])) {
      let val = mp.get(s[i]);
      mp.set(s[i], val + 1);
    } else {
      mp.set(s[i], 1);
    }
  }
  return Object.fromEntries(mp);
}

console.log(frequency("hello"));
