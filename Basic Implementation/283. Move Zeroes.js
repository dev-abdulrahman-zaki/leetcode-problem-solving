/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let nonZeroIdx = 0; // Index to track non-zero elements

  // Step(1): Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[nonZeroIdx] = nums[i];
          nonZeroIdx++;
      }
  }

  // Step(2): Fill the remaining positions with zeros
  while (nonZeroIdx < nums.length) {
      nums[nonZeroIdx] = 0;
      nonZeroIdx++;
  }
};

let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

// let nums = [0, 1, 0, 13, 12, 3, 6, 3, 0, 10, 15, 30];

// let nums = [0]
// Output: [0]

moveZeroes(nums);
// console.log(moveZeroes(nums));
console.log(nums);

// Try(1):
/*
var moveZeroes = function (nums) {
  // [nums[0], nums[1]] = [nums[1], nums[0]];
  // [nums[1], nums[2]] = [nums[2], nums[1]];
  // [nums[2], nums[3]] = [nums[3], nums[2]];
  // [nums[3], nums[4]] = [nums[4], nums[3]];
  // // while
  // [nums[1], nums[2]] = [nums[2], nums[1]];
  // [nums[2], nums[3]] = [nums[3], nums[2]];
};
*/

// Try(2): OK. But, Execution Timed Out - Time Limit Exceeded
/*
var moveZeroes = function (nums) {
  let zeroEleIdx = nums.findIndex((element) => element === 0);
  let nonZeroEleIdx = nums.findIndex((element,i) => element !== 0 && i > zeroEleIdx);
  while (zeroEleIdx < nonZeroEleIdx){
    [nums[zeroEleIdx], nums[nonZeroEleIdx]] = [nums[nonZeroEleIdx], nums[zeroEleIdx]];
    zeroEleIdx = nums.findIndex((element) => element === 0);
    nonZeroEleIdx = nums.findIndex((element,i) => element !== 0 && i > zeroEleIdx);
  }
  // console.log(zeroEleIdx, nonZeroEleIdx);
};
*/

// Try(3): While this moves all zeros to the end, it alters the original order of non-zero elements.
/*
var moveZeroes = function (nums) {
  nums.sort((a, b) => a - b);
  while (nums[0] === 0){
  nums.shift();
  nums[nums.length] = 0;
  }
};
*/


// 5 kyu - Moving Zeros To The End
// 7 kyu - Move Zeros