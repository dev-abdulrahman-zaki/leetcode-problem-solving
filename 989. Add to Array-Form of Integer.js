var addToArrayForm = function(num, k) {
    return (BigInt(num.join("")) + BigInt(k)).toString().split("");
};

let num = [1,2,0,0], k = 34
// Output: [1,2,3,4]

num = [2,7,4], k = 181
// Output: [4,5,5]

num = [2,1,5], k = 806
// Output: [1,0,2,1]

console.log(addToArrayForm(num, k));