/**
 * @param {Function} fn
 * @return {Function}
 */

/*
function memoize(fn) {
    let seenBefore = [{
        args: [],
        output: 1,
    }];
    return function (...args) {
        let index = seenBefore.findIndex(o => o.args.toString() === args.toString())
        if (index === -1) {
            let output = fn(...args);
            seenBefore.push({
                args: [...args],
                output: output
            });
            return output;
        } else {
            return seenBefore[index].output;
        }

    }
}
*/

// how to imporve its performance, since the last test case Time Limit Exceeded
// use a more efficient data structure for storing memoized values and lookups.
function memoize(fn) {
    const memoMap = new Map();
    return function(...args) {
        const key = args.toString();
        if (memoMap.has(key)) {
            return memoMap.get(key);
        } else {
            const result = fn(...args);
            memoMap.set(key, result);
            return result;
        }
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */