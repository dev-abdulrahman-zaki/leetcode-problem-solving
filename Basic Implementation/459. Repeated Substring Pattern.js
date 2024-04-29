/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length; i++) {
    let pattern = s.slice(0, i);
    let numOfChunks = s.length / pattern.length;
    let string = pattern.repeat(numOfChunks);
    if (numOfChunks<2){break;}
    // console.log(pattern);
    // console.log(numOfChunks);
    // console.log(string);
    if (string === s){return true;}
  }
  return false;
};

// let s = "abab";
// Output: true

// let s = "aba"
// Output: false

let s = "abcabcabcabcabc"
// Output: true

console.log(repeatedSubstringPattern(s));

// 6 kyu - Repeated Substring