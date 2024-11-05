var a = "a";
var b = "b";
var c = "";
c = a; // c = "a"
a = b; // a = "b"
b = c; // b = "a"
console.log(a); // b
console.log(b); // a
var arr = [1, 2];
var temp = 0;
temp = arr[0]; // temp = 1
console.log(arr); // [2,1]
