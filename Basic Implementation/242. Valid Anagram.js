var isAnagram = function (s, t) {
    const w1 = s?.split("").sort().join("");
    const w2 = t?.split("").sort().join("");
    // console.log(w1, w2);
    return w1 === w2;
};

// 7 kyu - Anagram Detection