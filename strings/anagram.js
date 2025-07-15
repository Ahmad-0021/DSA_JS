function anagram(s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  console.log({ s1, s2 });

  return s1 == s2;
}
console.log(anagram("listen", "silent"));
