let a = "a"
let b = "b"
let c = ""

c = a // c = "a"
a = b // a = "b"
b = c // b = "a"

console.log(a) // b
console.log(b) // a

const arr : Array<number> = [1,2]
let temp : number = 0
temp = arr[0] // temp = 1


console.log(arr) // [2,1]
