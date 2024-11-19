function romanNumeral(input) {
    var obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    var res = 0;
    for (var i = 0; i < input.length; i++) {
        // 1             >= undefined       OR 3 == 4 -1 
        if (obj[input[i]] >= obj[input[i + 1]] || i == input.length - 1) {
            res += obj[input[i]];
        }
        else if (obj[input[i]] < obj[input[i + 1]]) {
            res += obj[input[i] + input[i + 1]];
            // i++
        }
    }
    return res;
}
console.log(romanNumeral("LVII"));
console.log(romanNumeral("MCMXCIV"));
console.log(romanNumeral("XIV"));
