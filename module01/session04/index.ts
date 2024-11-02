console.log(12 % 2 == 0) // true , genap -> false , ganjil

let input = 15 
// buatlah sebuah persamaan yang menyatakan angka input masuk ke dalam range 
// 1 - 50 

// outputnya antara dia true atau false 
// kalau dia true , maka dia masuk range tersebut 
// kalau dia false, maka dia tidak termasuk range nya 
// > >= < <= , && ||
console.log(input >= 1 && input <= 50)

/*
A 90 - 100
B 80 - 89
C 70 - 79
D 60 - 69
E 0 - 59
invalid
*/

if(input >= 90 && input <= 100) {
    console.log("A")
} else if(input >= 0 && input <= 59){
    console.log("E")
}
else {
    console.log("Invalid")
}

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

for(let i = 1; i <= 5; i++) {
    console.log(i)
}

/*
1. odd
2. even
3. odd
4. even
5. odd

*/

for(let i = 1; i <= 5; i++) {
    console.log(i,".", i % 2 == 0 ? "even" : "odd")
}

for(let i = 1; i <= 5; i++) {
    if(i % 2 == 0){
        console.log(i,".","even")
    } else {
        console.log(i,".","odd")
    }
   
}