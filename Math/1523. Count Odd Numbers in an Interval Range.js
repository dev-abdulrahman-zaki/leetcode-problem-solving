var countOdds = function (low, high) {
  let i = low % 2 === 0 ? low + 1 : low;
  const length = high % 2 === 0 ? high - 1 : high;
  let count = 0;
  while (i <= length) {
    count++;
    i += 2;
  }
  return count;
};

// console.log(countOdds(800445804, 979430543));
// console.log(countOdds(8, 10));

// "JavaScript heap out of memory" typically occurs when your JavaScript code consumes more memory than the allocated limit, causing the Node.js runtime to terminate due to memory exhaustion. This often happens when dealing with large inputs or inefficient algorithms that use a lot of memory.
/*
var countOdds = function(low, high) {
    let i = (low % 2 === 0) ? low+1 : low;
    const length = (high % 2 === 0) ? high-1 : high;
    let arr = [];
    while (i <= length){
        arr.push(i);
        i+=2;
    }
    return arr.length;
};
*/


// GPT solution
/*
var countOdds = function(low, high) {
    // Formula for Count the number of odd numbers in the range [low, high]
    const count = Math.floor((high - low + 1) / 2);
    // Adjust count if low or high is odd (inclusive counting)
    if (low % 2 !== 0 || high % 2 !== 0) {
        return count + 1;
    } else {
        return count;
    }
};

*/