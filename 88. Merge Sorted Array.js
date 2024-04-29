var merge = function(nums1, m, nums2, n) {
    // step1: merge
    // nums1[m] = nums2[0]; // m
    // nums1[m+1] = nums2[1]; // m + 1
    // nums1[m+2] = nums2[2]; // m + 2
    let i = m;
    let ii = 0;
    while (i < m+n){
        nums1[i] = nums2[ii];
        i++;
        ii++;
    }
    // step2: sort
    let nums1_sorted = nums1.sort((a,b)=>a-b);
    for (let i=0; i<nums1.length; i++){
        nums1[i] = nums1_sorted[i]
    }
};

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3
// Output: 1,2,3,4,5,6]

// nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
merge(nums1, m, nums2, n);
console.log(nums1);









/*
var merge = function(nums1, m, nums2, n) {
    return [...nums1.slice(0,m), ...nums2].sort((a,b)=>a-b);
};
*/