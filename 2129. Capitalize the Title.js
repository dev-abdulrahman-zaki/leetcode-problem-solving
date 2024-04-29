var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((w) => w.toLowerCase())
    .map((w) => w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w)
    .join(" ");
};

let title = "capiTalIze tHe titLe";
// Output: "Capitalize The Title"
title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
title = "i lOve leetcode"
// Output: "i Love Leetcode"
console.log(capitalizeTitle(title));