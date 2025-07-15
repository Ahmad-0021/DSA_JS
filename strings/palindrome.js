function palindrome(s) {
  if (s.length < 2) return true;
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
}
console.log(palindrome("madam"));
console.log(palindrome("hello"));
