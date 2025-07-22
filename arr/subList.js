function groupAnagrams(strs) {
  const map = {};
  for (let word of strs) {
    let sorted = word.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(word);
  }
  return Object.values(map);
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strs));
