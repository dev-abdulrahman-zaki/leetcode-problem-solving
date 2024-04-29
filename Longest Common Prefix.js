var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0][i];
    if (strs.every((w) => w[i] === c)) {
      prefix += c;
    } else {
      break;
    }
  }
  return prefix;
};

let strs = ["cir", "car"];
console.log(longestCommonPrefix(strs)); //should output "c" not "cr"
