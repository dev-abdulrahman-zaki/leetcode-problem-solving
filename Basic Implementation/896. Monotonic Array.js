var isMonotonic = function (nums) {
  let arr = [];
  if (nums[0] < nums[nums.length - 1]) {
    for (let i = 0; i < nums.length - 1; i++) {
      arr.push(nums[i] <= nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      arr.push(nums[i] >= nums[i + 1]);
    }
  }
  return arr.every(e => e === true);
};

isMonotonic([1,2,2,3])
// Output: true

isMonotonic([6,5,4,4])
// Output: true

isMonotonic([1,3,2])
// Output: false
