let myName : string = "Aries Dimas Yudhistira"
console.log(myName)

let age : number = 17 
console.log(myName , age)

const hobbies : Array<string> = ["GTA V","Cs 1.6", "genshin Impact","rocket league"]
console.log(hobbies)

interface IPerson {
    name:string
    title:string
    age:number
}

const person : IPerson = {
    name:"dimas",
    title:"Digital Marketer",
    age:17 
} 

console.log(person)

let test = true as boolean
console.log(test)


console.log(myName.split(""))
console.log(myName.split(' '))
console.log(myName.split("a"))

console.log(`Aries 
Dimas 
Yudhistira
${myName}
`)

console.log(typeof age.toString())
console.log(typeof age)

let myNumber = - 12.34

console.log(myNumber.toFixed())
console.log(parseFloat("123.23"))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

console.log(Number.NEGATIVE_INFINITY < -5465675678794564435)
console.log(person.name)
console.log(Number)

console.log(String(34.5))
console.log(typeof String(true))

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(123)) // true
console.log(Boolean("")) // false 
console.log(Boolean(" ")) // true 
console.log(Boolean("abc")) // true
console.log(Boolean(null)) // false 
console.log(Boolean(undefined))// false
console.log(Boolean(NaN)) // false
// thruty falsy

console.log(myNumber + 90)
console.log(90 + "ab")
console.log("ab" + 90)

let myDate : Date = new Date()

console.log(myDate)
console.log(new Date(365 * 24 * 60 * 60 * 1000))
console.log(new Date("2024/10/28"))
console.log(new Date("2024/10/28 16:05:00"))

console.log(myDate.getDay())
console.log(myDate.getFullYear())

console.log(myNumber * 12)
console.log(myNumber**6)

let num = -12
let res : number = num 

res += 10
res += 5 

console.log(res)

myNumber = 100
myNumber += 50 // myNumber = myNumber + 50
myNumber += 60

myNumber *= 2 // myNumber = myNumber * 2 
myNumber *= 3 

console.log(myNumber)

console.log(myNumber++)// 1260 / 1261 

console.log(myNumber) // 1261

console.log(++myNumber)

let num2 : number = 45
let num3 : number = 78
let num4 : string = "78"
console.log("---------------------")
console.log(num2 == num3); // false 
console.log(num2 <= num3); // false
console.log(num3 < num2); // true
console.log(num3 > num2); // false
console.log(num3 >= num2); // false
// console.log(num3 == num4); // false
// console.log(num3 === num4); // false

// console.log(num3 == num4) // false
// console.log(num3 === num4) // false

console.log(num3 != num2) // true
console.log(!true)
console.log(!false)

console.log(5 % 3) // 2  --> 5 / 2 = 1 , 5 - (3 * 1) = 2
                   // 7 % 3 . 7 / 3 = 2, 7 - ( 3 * 2) = 1
                   // 17 % 4 . 17 / 4 = 4 , 17 - (4 * 4 ) = 1

