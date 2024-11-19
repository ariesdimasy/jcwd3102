let str = "dimas yudhistira"
let arr = [1,2,3]
let fruits = ["mera","nika","hito","uma"]
let four = 4

fruits.splice(2,1,"suna","pika")

console.log(fruits)

console.log(str.replace("a","o"))
console.log(arr.reverse())

let arr2 : (string | number | object ) [][] = [
    [1,"test",["a","b",[{ name: "d"}]]],
    [],
    [],
    []
    ["a","b","c"]
]

// jika akses arr[4][3][0]
// console.log(arr[4][3][0])

let arr4 = [ () => 4, []]

// console.log(arr4[3][0])
console.log(arr4[0])
console.log(arr4[0]())

say()
function say(){
    console.log(2 * 2)
    
}

// let temp = "aries".split("")
// for(let i = 0; i < temp.length; i+=1){
//     temp.push(temp[i])
// }

// error by reference
// error by type

let res2 = arr.map((item) => {
    let res = item * 2
    return res
})

arr.forEach((item) => {
    console.log(item * 2)
})

console.log(arr)
console.log(res2)

interface IPerson {
    name: string;
    age: number;
    status? : string;
}

let person1 : IPerson = { 
    name: "dimas",
    age: 17,
    status: "married"
}

let person2 : IPerson = { 
    name: "dimas",
    age: 17,
   
}

console.log(person2.status)

console.log(typeof Number("12z"))

let age = 0


if(!age === true) { 
    console.log("name tidak lengkap")
}

// LIFO : LAst in First OUT




