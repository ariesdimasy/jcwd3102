function read01() {
    var result = "";
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            result += "O";
        }
        else {
            result += "X";
        }
    }
    return result;
}
read01();
// A. OOOOOO
// B. XXXXXX
// C. XOXOXO
function read02() {
    var res = [];
    for (var i = 0; i < 10; i++) {
        res.push(i);
    }
    return res;
}
// [10,9,8,7,,,,0]
// [i,i,i,i,i,i,i...]
// [1,2,3,4,5,6..10]
function read03(haystack, needle) {
    var res = 0;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            res = i;
            return res;
        }
    }
    return -1;
}
read03([1, 2, 3, 5, 6], 3);
// true 
// false 
// -1 
// 
function read04(height) {
    for (var i = 0; i < height; i++) {
        var row = "";
        for (var j = 0; j < height; j++) {
            if (i % 2 == 0) {
                row += "O";
            }
            else {
                row += "X";
            }
        }
        console.log(row);
    }
}
read04(4);
/*
OXOX OXOX OOOO XXXX
OXOX OXOX XXXX OOOO
OXOX
OXOX
*/
function read05(height) {
    var counter = 1;
    for (var i = 0; i < height; i++) {
        var row = "";
        for (var j = 0; j < height; j++) {
            counter += 1;
            row += counter; // "2"
        }
        console.log(row);
    }
}
/*
12345 23456   246810
      7891011 1214161820
      1213141516
*/
read05(5);
// " " + 2 = " 2"
// "" + 2 = "2"
