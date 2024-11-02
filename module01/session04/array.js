var arr = [3, 2, 5, 1, 4, 6];
console.log(arr);
console.log(arr[2]);
console.log(arr.length); // 6, 5 
arr[5] = 8; // update item data
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.push(34);
arr.push(45, 12, 36);
console.log(arr);
console.log(arr.toString());
console.log(arr.join("*"));
console.log(arr.map(function (item) { return item * 2; }));
console.log(arr.sort(function (a, b) { return a - b; }));
// console.log(arr.map(function(item){ return item * 2 }))
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var people = [];
var mice = [];
var geese = [];
