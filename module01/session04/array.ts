let arr : Array<number> = [3,2,5,1,4,6]
console.log(arr)
console.log(arr[2])
console.log(arr.length) // 6, 5 

arr[5] = 8 // update item data

for(let i = 0; i < arr.length; i++) { 
    console.log(arr[i])
}

arr.push(34)
arr.push(45,12,36)

console.log(arr)

console.log(arr.toString())
console.log(arr.join("*"))
console.log(arr.map((item) => item * 2))
console.log(arr.sort((a,b) => a - b ))
// console.log(arr.map(function(item){ return item * 2 }))

for(let item of arr) {
    console.log(item)
}

let people = []
let mice = []
let geese = []

