let grade : number = 80

if(grade >= 85) {
    console.log("congratulations you are Graduate")
} else {
    console.log("you only participant")
}

// type IColor = ("red" | "yellow" | "green")

let trafficLight : string = 'green'

if(trafficLight == "red") { 
    console.log("stop")
} else if(trafficLight == "yellow"){
    console.log("be careful")
} else if(trafficLight == "green"){
    console.log("run")
} else {
    console.log("invalid color")
}

switch(false){
    case grade >= 85:// false == false
        console.log("congratulations you are Graduate")
        break
    default:
        console.log("you only participant")
}

console.log('========')

console.log(true && true) // true 
console.log(true && false ) // false
console.log(false && false) // false 

console.log(true || true) // true 
console.log(true || false)// true 
console.log(false || false) // false 
// true &&   true
console.log(" result : ", 65 >= 57 && ("a" == "A" || 54 == "54"));
console.log("a" == "A")
console.log("Aries" == "aries")

console.log("===========")

console.log("b" != "B") // true
console.log(!true) // false
console.log("aa" != "AA" && 677 <= 87) // false

let str : string = "Typescript"
if(str === "Typescript"){
    if(56 == 45){
        console.log("ngapain")
    } else {
        console.log("gak ngapa2in")
    }
    console.log("This is Typescript")
} else {
    console.log("This is not typescript")
}

let result3 = 
    (str === "Typescript" && 12 == "12") || (34 >= 0 && 445 != 90) ? 
        56 == 45 ?  "ngapain"  :  "gak ngapa2in" 
        : "This is not typescript" 

console.log(result3)

let value1 : number = 0
let result4 : number | string = value1 && 'Hello'
console.log(result4) // 0 , kiri 

let value2 : number = 23
let result5 : number | string = value2 && 'Hello World'
console.log(result5) // Hello World , kanan 

let value3 : number = 0
let result6 : number | string = value3 || 'Hello World'
console.log(result6) // Hello World, kanan

let value4 : number = 0
let result7 : number | string = value4 || ''
console.log(result7) // '' , kanan

let value5 : string = "Dimas"
let result8 : number | string = value5 || 'Guest'
console.log(result8) // Dimas, kiri 

/* 
jika falsy value  AND value maka yang di assign yang (kiri) value falsy 
jika truthy value  AND value maka yang di assing yang (kanan) value 

jika falsy value  OR value maka yang di assign yang ( kanan) value 
jika truthy value OR value maka yang di assign yang ( kiri )  value truthy 
*/

let i =1

i = i + 2 // 3
i += 2 // i = 3 + 2
i = i * 3 // i = 5 * 3 = 15 
i *= 4 // i = 15 * 4 = 60
i = i / 6 // i = 60 / 6 = 10 
i /= 5 // i = 10 / 5 = 2
console.log(i) // 2