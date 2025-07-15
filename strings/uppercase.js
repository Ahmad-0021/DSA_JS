function uppercase(params) {
  params = params.trim().split(/\s+/);
  console.log(params);

  let arr = [];
  for (let i = 0; i < params.length; i++) {
    let first = params[i].charAt(0).toUpperCase();
    let second = params[i].slice(1).toLowerCase();
    arr.push(first + second);
  }
  return arr.join(" ");
}
console.log(uppercase("  dSa   is   Fun  "));
