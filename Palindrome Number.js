var isPalindrome = function(x) {
    return String(x).split("").reverse().join("") == x;
};

console.log(isPalindrome(121));