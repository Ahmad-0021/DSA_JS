function count(s) {
  let str = s.trim().split(/\s+/);
  return str.length;
}

console.log(count("   DSA    is   fun   "));
