/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};

// const nums = [1, 2, 3, 1]; //true
// const nums = [1,2,3,4] //false
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //true

const x = containsDuplicate(nums);
console.log(x);
