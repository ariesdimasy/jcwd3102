function read01(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i - 1] == ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(read01("aries dimas yudhistira")); // aries Dimas Yudhistira
console.log(read01("")); // ''
console.log(read01("arEis")); // ArEis
