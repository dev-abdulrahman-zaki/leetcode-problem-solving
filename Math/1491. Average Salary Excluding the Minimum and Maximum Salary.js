/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = salary.reduce((acc,curr) => acc+curr, 0) - Math.max(...salary) - Math.min(...salary);
    let length = salary.length-2;
    return sum / length;
};


average([4000,3000,1000,2000]);
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

average([1000,2000,3000]);
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000