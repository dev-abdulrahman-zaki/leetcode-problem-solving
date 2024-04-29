/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const length = Math.min(word1.length, word2.length);
    const diff = Math.abs(word1.length-word2.length);
    const max = word1.length > word2.length ? word1 : word2;
    let s = "";
    for (let i=0; i<length; i++){
        s += (word1[i]+word2[i]);
    }
    if (diff>0){return s + max.slice(length,)}
    return s;
};


// let word1 = "abc", word2 = "pqr";
// Output: "apbqcr"

let word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

// let word1 = "cdf", word2 = "a"
// Output: "apbqcd"

// mergeAlternately(word1, word2);
console.log(mergeAlternately(word1, word2));

// 6 kyu - Interlace an arbitrary Number of Strings