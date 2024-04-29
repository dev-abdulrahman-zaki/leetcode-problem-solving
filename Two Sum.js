// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.lenght; i++) {
//     nums.forEach((n, ii) => (e + n == target ? arr.push(i) : ""));
//   }
//   return arr;
// };

function twoSum(nums, target) {
  let arr = [];
  outerloop: for (let i = 0; i < nums.length; i++) {
    for (let ii = 0; ii < nums.length; ii++) {
      if (i == ii) {
        continue;
      }
      if (nums[i] + nums[ii] == target) {
        arr.push(i, ii);
        break outerloop;
      }
    }
  }

  return arr;
}

// Example 1:
// let nums = [2, 7, 11, 15],
//   target = 9;
// console.log(twoSum(nums, target));
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// let nums = [3, 2, 4],
//   target = 6;
// console.log(twoSum(nums, target));
// Output: [1,2]

// Example 3:
let nums = [3, 3],
  target = 6;
console.log(twoSum(nums, target));
// Output: [0,1]
