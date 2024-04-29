/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
    if (n === 0) {
        return arr;
    }
    let flatArray = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flatArray.push(...flat(item, n - 1)); // Recursive call to flatten nested arrays
        } else {
            flatArray.push(item); // Add non-array elements directly
        }
    }
    return flatArray;
};

// Time Limit Exceeded
// To improve the performance of your flat function for flattening deeply nested arrays and avoid exceeding the time limit, you can consider optimizing the recursive approach.
/*
var flat = function (arr, n) {
    if (n === 0) { return arr; }
    let i = 0;
    let flatArray;
    let nestedArray = arr;
    while (i < n) {
        flatArray = nestedArray.reduce((acc, value) => acc.concat(value), [])
        nestedArray = flatArray;
        i++;
    }
    return flatArray;
};
*/
