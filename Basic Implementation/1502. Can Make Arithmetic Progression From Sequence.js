/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);
    let x = arr.map((e, i) => e - arr[i + 1]).slice(0, -1);
    return x.every(e => e === x[0]);
};

// 7 kyu - Arithmetic progression
// 6 kyu - Find the missing term in an Arithmetic Progression