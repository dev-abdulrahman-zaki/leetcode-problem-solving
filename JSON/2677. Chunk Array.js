/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let arr2d = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = [];
        chunk = arr.slice(i, i + size);
        // console.log (chunk)
        arr2d.push(chunk);
        chunk = [];
    }
    return arr2d;
};

// fcc: Chunky Monkey