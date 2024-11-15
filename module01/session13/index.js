function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, res) {
    return x * res(2, 3);
}
// console.log(multiply(2, add(3,4)))
console.log(multiply(2, add));
console.log(multiply(2, function (x, y) {
    return Math.pow(x, 2) + Math.pow(y, 3);
}));
console.log(multiply(2, subtract));
// console.log(add(2,3))
// console.log(add)
var arr = [1, 6, 5, 4];
// arr.sort((x,y) => x-y )
arr.sort(function (x, y) {
    return x - y;
});
console.log(arr);
