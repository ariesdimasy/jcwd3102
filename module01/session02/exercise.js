let num = 7

if(num % 2) {
    console.log("angka ganjil")
} else {
    console.log(" angka genap ")
}

if(num % 2 == 0) {
    console.log("angka genap")
} else {
    console.log(" angka ganjil ")
}

if(num % 2 == 1) {
    console.log("angka ganjil")
} else {
    console.log(" angka genap ")
}

// Andi + Budi = 49
// Ratio 4/10

// 2,3,...16

// 2,3,4
let res = true // prima
for(let i = 2; i < num; i++){
    // 7 % 2 == 0 --> false
    if(num % i == 0){
        res = false // bukan prima
        break 
    }
}

console.log(res == true ? "prime" : "not prime")

// let res = true 
// res = false 
// console.log(res)// 

let a = 10 // kopi
let b = 4 // jus
let c = 0
c = a // kopi 
a = b // isi jus
b = c // isi kopi
// ....
console.log(a) // 4
console.log(b) // 10

let res2 = 0
let j = 23
// i = 5
// res2 = 15
for(i = 1; i <= 5; i++){
  //res2 = i // res2 = 3 
    res2 = res2 + i//  res2 = 10 + 5
    // res2 = i * 3 + res2
    // j= j + 10
    if(res2 === 10){
        res2 = 6
    }
// res2 += i
  // res2 = 15
//   console.log(res2) // 3
}

console.log(res2) // 6
//     1 , 2 , 3, 4,  5 ,6 , 7 , 8,   9 
// 0 , 1 , 1 , 2, 3 , 5 ,8 ,13 , 21 , 34
//         (x + x-1 )
let prev_number = 0 // 0
let current_number = 1 // 1 
console.log(" i = ", 1, "current_number = ", current_number)
for(i = 2; i <= 15; i++){
    let temp = prev_number // 0
    prev_number = current_number // 1
    current_number = current_number + temp // 2
    console.log(" i = ", i , "current_number = ", current_number)
}