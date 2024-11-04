let arr = ["A","B","C","D","DA"," ","F"]

console.log(arr)
console.log(arr[arr.length - 1])// " "

// menampilkan dari atas ke bawah
/*
C
B
A
*/

for(let i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}

console.log(Math.floor(3.5))

console.log(arr[Math.floor(arr.length / 2)])

let arr2 : Array<number> = [23,1,23,14,45,23,23,12]
// let res : Array<string> = []
// console.log(res.concat(arr, arr2))

// arr2[0] = 23 * 2
// console.log(arr2) // [46, 1,23,14,45,23,23,12]

for(let j = 0; j < arr2.length; j++){
    if(j % 2 == 0){
        arr2[j] = arr2[j] * 2// arr2[j] += 23 + 23 * 2
    } else {
        arr2[j] = arr2[j] * 3
    }
}

console.log(arr2)
/*
[23*2= 46, 1*3=3, 23*2, 14*3,]
*/

// 3
console.log([
    [1,2, 3],
    [4,5,6],
    [7,8,9]
])

function createArrayMultiDimension(height:number){
    let res : Array<any> = []
    let temp: Array<number> = []

    for(let i = 0; i < height; i++ ){
        temp.push(0)
    }
    for(let j = 0; j < height; j++){
        res.push(temp)
    }

    return res
}

console.log(createArrayMultiDimension(5)) // [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
console.log(createArrayMultiDimension(7))

// counter
let counter = 1
let row = ""
for(let i = 0; i < 3; i++){
    // 
    for(let j = 0; j < 3; j++){
        row += String(counter) // 123 + 456
        counter++
    }
    console.log(row) // 123
}
/*
3
6
9

123
123456





1 2 3 
4 5 6
7 8 9 

1
2
3
*/
