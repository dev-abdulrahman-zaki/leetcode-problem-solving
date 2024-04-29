/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let s = x;
        for (let i=functions.length-1; i>=0; i--){
            s = functions[i](s);
            // console.log(s);
        }
        return s;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// const addOne = x => x + 1;
// const square = x => x * x;
// const compose = (f, g) => x => f(g(x));
// const addOneThenSquare = compose(square, addOne);