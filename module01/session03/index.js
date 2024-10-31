var a = "a"; // 0
a = a + "b"; // 1
console.log(a);
a += "c"; // 2
a += "d"; // 3
a += "ef";
a += "gh";
console.log(a); //
console.log(a[3]); // d
// 5 
// *****
var input = 3;
var result = ""; // **
//          1  1 >= 5 
for (var i = 1; i <= input; i++) {
    //        "01"   + 2
    // result = result + i // "01234"
    result += "*";
}
for (var j = 1; j <= input; j++) {
    console.log(result); // 
}
/*
*****
*****
*****
*****
*****

*
**
***
****
*****

    * 0  0-3 = ' '
   ** 1  0-2 = " "
  *** 2  0-1 = " "
 **** 3  0   = " "
***** 4

*/
var result2 = "";
for (var k = 1; k <= input; k++) {
    result2 = "*";
    console.log(result2);
}
for (var i = 0; i <= input; i++) {
    var result_1 = ""; // declare and assign ""
    result_1 += "*"; // tambah / add "*"
    console.log(result_1); // display *
}
/*

*
*
*

*/
console.log(a);
console.log(a.length);
var res3 = "";
//                  8 
for (var i = 0; i < a.length; i++) {
    console.log(a[i]); // a[2] --> a
    // res3 += a[i]
}
// console.log(res3) 
/*
a
b
c
*/ 
