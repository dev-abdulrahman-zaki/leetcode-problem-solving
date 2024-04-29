/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let product = nums.reduce((acc, curr) => acc * curr, 1);
    function signFunc(product) {
        if (product > 0) { return 1 }
        else if (product < 0) { return -1 }
        else { return 0 }
    }
    return signFunc(product);
};