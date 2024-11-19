var str = "dimas yudhistira";
var arr = [1, 2, 3];
var fruits = ["mera", "nika", "hito", "uma"];
var four = 4;
fruits.splice(2, 1, "suna", "pika");
console.log(fruits);
console.log(str.replace("a", "o"));
console.log(arr.reverse());
var arr2 = [
    [1, "test", ["a", "b", [{ name: "d" }]]],
    [],
    [],
    []["a", "b", "c"]
];
// jika akses arr[4][3][0]
// console.log(arr[4][3][0])
var arr4 = [function () { return 4; }, []];
// console.log(arr4[3][0])
console.log(arr4[0]);
console.log(arr4[0]());
say();
function say() {
    console.log(2 * 2);
}
// let temp = "aries".split("")
// for(let i = 0; i < temp.length; i+=1){
//     temp.push(temp[i])
// }
// error by reference
// error by type
var res2 = arr.map(function (item) {
    var res = item * 2;
    return res;
});
arr.forEach(function (item) {
    console.log(item * 2);
});
console.log(arr);
console.log(res2);
var person1 = {
    name: "dimas",
    age: 17,
    status: "married"
};
var person2 = {
    name: "dimas",
    age: 17,
};
console.log(person2.status);
console.log(typeof Number("12z"));
