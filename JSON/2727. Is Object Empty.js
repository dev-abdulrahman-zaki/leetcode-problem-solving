/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // if (Array.isArray(obj)){
  //     return obj.length === 0;
  // }
  return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]";
};

console.log(isEmpty([]));
