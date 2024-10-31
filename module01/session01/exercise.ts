let lh : number = 10 
let width : number = 15 
let result : number = lh * width

console.log(result)

let parimeter : number = 2 * ( lh + width)

console.log(parimeter)

const PI2 = 3.14
let radius = 5
let diameter = radius * 2
let circumference = 2 * PI2 * radius
let area = PI2 * radius * radius
console.log(`diameter : ${diameter} , circumference : ${circumference}, area : ${area}`)

let a = 80
let b = 65

console.log(180 - (a+b))

let days = 5460 
let leftYear = days % 365 // days - (sisa berapa tahun * 365 ) 
let year = days / 365 // mencari tahu berapa tahun dalam hitungan hari 
//===========================
let leftDays = leftYear % 30 // 13 , 73 % 30 = 2 = 13 
let month = leftYear / 30

console.log(`${year} year, ${month} month, ${leftDays} day`)

console.log('-----------')

let date1 : any = new Date("2022-01-20")
let date2 : any = new Date("2022-01-22")
let result2 = date2 - date1
console.log(Math.abs(result2 / (24 * 60 * 60 * 1000)))
