var str = "madami"; // 0 - 5
var res = "";
//    5      6 >= 0; 
for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
}
console.log(res);
function formatNumber(num) {
    var result = "";
    var numStr = String(num); // "1000"
    var j = 1;
    for (var i = numStr.length - 1; i >= 0; i--) {
        if (j % 3 == 0) {
            result += numStr[i] + ".";
        }
        else {
            result += numStr[i];
        }
        j++;
    }
    // result = "000.1"
    console.log(result);
}
// 343.565.765.455.756.765.756.7
// 100.0
formatNumber(1000);
formatNumber(15250);
function capital(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] == ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(capital('hello world'));
console.log(typeof "hello");
var h = 1;
if (typeof h === 'string') {
    console.log(1);
}
else if (typeof h === 'number') {
    console.log(2);
}
else {
    console.log(3);
}
function encryptA(word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === "a") {
            result += "*";
        }
        else {
            result += word[i];
        }
    }
    return result;
}
console.log(encryptA("Aries Dimas"));
console.log(encryptA("Yudhistira"));
