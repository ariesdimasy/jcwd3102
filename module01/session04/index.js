console.log(12 % 2 == 0); // true , genap -> false , ganjil
var input = 15;
// buatlah sebuah persamaan yang menyatakan angka input masuk ke dalam range 
// 1 - 50 
// outputnya antara dia true atau false 
// kalau dia true , maka dia masuk range tersebut 
// kalau dia false, maka dia tidak termasuk range nya 
// > >= < <= , && ||
console.log(input >= 1 && input <= 50);
/*
A 90 - 100
B 80 - 89
C 70 - 79
D 60 - 69
E 0 - 59
invalid
*/
if (input >= 90 && input <= 100) {
    console.log("A");
}
else if (input >= 0 && input <= 59) {
    console.log("E");
}
else {
    console.log("Invalid");
}
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
/*
1. odd
2. even
3. odd
4. even
5. odd

*/
for (var i = 1; i <= 5; i++) {
    console.log(i, ".", i % 2 == 0 ? "even" : "odd");
}
for (var i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        console.log(i, ".", "even");
    }
    else {
        console.log(i, ".", "odd");
    }
}
function removeOddNumber(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function splitString(str) {
    var result = [];
    var word = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            result.push(word);
            word = "";
        }
        else {
            word += str[i];
            if (i == str.length - 1) {
                result.push(word);
                word = "";
            }
        }
    }
    return result;
}
console.log(splitString("Hello World")); // ["Hello"] ["Hello","World"]
function stairNumber(height) {
    var counter = 1;
    //             2 <= 5; i = i + 1
    for (var i = 1; i <= height; i++) {
        var row = ""; // ""
        for (var j = 0; j < i; j++) {
            if (counter < 10) {
                row += '0' + counter + ' ';
            }
            else {
                row += counter + ' ';
            }
            counter++; // counter = counter + 1 = 2 
        }
        // row = 02 03  
        console.log(row); // 01 
    }
}
/*
01
0101
010101
*/
stairNumber(5);
stairNumber(6);
