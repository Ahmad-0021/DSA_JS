function isomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sToT = new Map();
  const tToS = new Map();
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Check s -> t mapping
    if (sToT.has(charS)) {
      // If charS already has a mapping, it must be consistent
      if (sToT.get(charS) !== charT) {
        return false; // Inconsistent mapping
      }
      // If consistent, do nothing (mapping already exists)
    } else {
      // Create new mapping from charS to charT
      sToT.set(charS, charT);
    }

    // Check t -> s mapping
    if (tToS.has(charT)) {
      // If charT already has a mapping, it must be consistent
      if (tToS.get(charT) !== charS) {
        return false; // Inconsistent mapping
      }
      // If consistent, do nothing (mapping already exists)
    } else {
      // Create new mapping from charT to charS
      tToS.set(charT, charS);
    }
  }

  return true;
}

console.log(isomorphic("egg", "add"));
console.log(isomorphic("foo", "bar"));
