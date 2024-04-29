var lengthOfLastWord = function(s) {
    return s.trim().split(" ").slice(-1)[0].length;
};


let s = "Hello World";
// Output: 5

// s = "   fly me   to   the moon  "
// Output: 4

// s = "luffy is still joyboy"
// Output: 6
console.log(lengthOfLastWord(s));