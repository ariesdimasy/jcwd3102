for (var i = 0; i <= 5; i += 3) {
    console.log("hello = ", i);
}
console.log(i);
for (var i_1 = 5; i_1 <= 100; i_1 *= 2) {
    console.log("hello = ", i_1);
}
for (var i_2 = 0; i_2 <= 5; i_2 = i_2 + 1) {
    console.log("hello = ", i_2);
}
// for(let i = 0; i <= 5 ; i-=1){
//     console.log("hello = ", i)
// }
// for(let i = 0; i <= 5 ; ){
//     console.log("hello = ", i)
// }
// for(let i = 0; ;i++ ){
//     console.log("hello = ", i)
// }
var j = 0; // awalan
while (j <= 5) {
    if (j == 2)
        continue;
    console.log("hello while ", j);
    j++; // j = j + 1
}
console.log(j); // 
while (false) {
    console.log("hello");
}
do {
    console.log("hello do while ", j);
    j++; //
} while (j <= 10);
console.log(j); // 11
for (var i_3 = 0;; i_3++) {
    if (i_3 == 14)
        continue;
    console.log("hello infinite = ", i_3);
    if (i_3 == 20)
        break;
}
