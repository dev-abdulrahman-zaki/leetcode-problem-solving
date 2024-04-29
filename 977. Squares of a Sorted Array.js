var sortedSquares = function(nums) {
    return nums.map(n => n**2).sort((a,b)=>a-b);
};

let nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

console.log(sortedSquares(nums));