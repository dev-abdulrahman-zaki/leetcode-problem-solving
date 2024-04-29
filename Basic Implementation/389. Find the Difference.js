var findTheDifference = function(s, t) {
    const w1 = s?.split("").sort();
    const w2 = t?.split("").sort();
    // console.log(w1, w2);
    for (let i=0; i<w2.length; i++){
        if (w2[i] !== w1[i]){
            return w2[i];
        }
    }
};


// let s = "abcd", t = "abcde"
// Output: "e"

// let s = "", t = "y"
// Output: "y"

let s = "ae", t = "aea"
// Output: "a"

// let s = "a", t = "aa"
// Output: "a"

console.log(findTheDifference(s,t));


// Try(1):
/*
var findTheDifference = function(s, t) {
    const w1 = s?.split("").sort();
    const w2 = t?.split("").sort();
    console.log(w1, w2);
    const diff = w2.length - w1.length;
    return w2.slice(-diff)[0];
};
*/


// Numbers Version: 7 kyu - Find the missing element between two arrays