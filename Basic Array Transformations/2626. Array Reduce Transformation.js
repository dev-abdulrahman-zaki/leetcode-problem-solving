/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
      accum = fn(accum, nums[i]);
    }
    return accum;
};



/*
[1,2,3,4].reduce((acc, curr)=>{
    return acc + curr;
}, init)

- first iteration: i=0
acc = init = 0
curr = 1

- i=1
acc = 1
curr = 2

and so on ...

*/