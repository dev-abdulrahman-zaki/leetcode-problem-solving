/*
var isValid = function (s) {
  let result = true;
  let closeBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in closeBracket) {
      if (s[i + 1] != closeBracket[s[i]]) {
        result = false;
      }
    }
  }
  return result;
};
*/

/*
var isValid = function (s) {
  let closeBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let strSlice1 = s.slice(0, s.length / 2);
  let strSlice2 = s.slice(s.length / 2).split("").reverse().join("");
  console.log(strSlice1, strSlice2);
  console.log(closeBracket[strSlice1[0]]);
  return strSlice1.split("").every((b,i) => closeBracket[b]==strSlice2[i]);
};
*/

/*
var isValid = function (s) {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stringArr = s.split("");
  let n = stringArr.length / 2;
  for (let i = 0; i < n; n--) {
    if (stringArr[i] in brackets) {
      let idxs = [];
      let findCloseBracket = stringArr.indexOf(brackets[stringArr[i]]);
      if (findCloseBracket != -1) {
        idxs.push(i, findCloseBracket);
      }
      stringArr = stringArr.filter((e, idx) => !idxs.includes(idx));
    }
  }
  console.log(stringArr);
  return stringArr.length == 0;
};
*/

/*
var isValid = function (s) {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // let stack = [];
  // for (p of s){
  //   if (p in brackets){stack.push(p);}
  // }
  let openBracketsStack = s.split("").filter(p => p in brackets);
  let closeBracketsStack = s.split("").filter(p => !(p in brackets));
  // for (p of closeBracketsStack.reverse()){
  //   console.log(p);
  // }
  // return openBracketsStack.map(p => brackets[p]).join("") === closeBracketsStack.reverse().join("");
  console.log(openBracketsStack);
  console.log(closeBracketsStack);
};
*/

var isValid = function (s) {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // if (s.search(/[{[(]/) === -1) {
  //   return false;
  // }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // if (!(s[0] in brackets)){return false;}
    if (s[i] in brackets) {
      stack.push(s[i]);
    } else {
      if (s[i] === brackets[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
    // console.log(stack);
  }
  // console.log(stack);
  return !stack.length;
};

// let s = "([)]";
// console.log(isValid(s)); //false
// s = "([])";
// console.log(isValid(s)); //true
// s = "()";
// console.log(isValid(s)); //true
// s = "()[]{}";
// console.log(isValid(s)); //true
// s = "(]";
// console.log(isValid(s)); //false
let s = ")(){}";
console.log(isValid(s)); //false
// let s = "(])";
// console.log(isValid(s)); //false