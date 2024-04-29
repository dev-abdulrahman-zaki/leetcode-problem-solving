var plusOne = function(digits) {
    return (BigInt(digits.join(""))+1n).toString().split("");
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

console.log(plusOne(digits));