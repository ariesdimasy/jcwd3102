// f(x) -> 45 + 4 
// f(x) = 10 
// x = 6 

// x = 45 
// f(x) = 

// y = (fx)

// function declaration 
// f            x 

function hello(x:string){
    // let name = "aries"
    console.log("hello "+x)
}

// console.log(name)

function hello2(x:string, y:string){
    console.log("hello "+x+" and "+y)
}

function add(a:number=35, b:number = 47) {
    console.log(a+" + "+b+" = ",a+b)
}

function showNumbers(a:number, b:number, ...args) { 
    console.log(a)
    console.log(b)
    console.log(args)
}

hello("Dimas") // input : Dimas
hello("Rian") // 
hello("Lutfi")

hello2("Lutfi","Dimas")

add(45,78)
add(67)
add()

const minus = function(a:number , b:number){
    // console.log(a+" - "+b+" = ",a-b)
    return a-b
}

minus(13,67)

const multiply = (a:number, b:number) => {
    console.log(a+" * "+b+" = ",a*b)
}

multiply(56,34)

console.log(minus(12,12))

const result = minus(45,67) // -22
const result2 = multiply(6,7)

console.log(result)
console.log(result2)// undefined

showNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

function showNumberAgain(...args){
    console.log(args)
}

showNumberAgain(1,2,3,4)

function getMessage() : string {
    function sayHello(){
        console.log(" hello ")
    }

    const handleClick = () => {
        console.log("clicked")
    }

    sayHello()
    handleClick()

    return "this is message "
}

console.log(getMessage())

function greeting() {
    let name = 'Heru'

    return function(){
        return name
    }
}

let greet = greeting() // function
console.log(greet())

// function multiplier(num:number, factor:Function){
//     return num * factor
// }

// function test(num:number){
//     return num
// }

// console.log(multiplier(5,test))
// console.log(multiplier(3,10))

// const mul3 = multiplier(3)

// console.log(mul3(5))


function recursiveFunc(counter:number, limit:number) {
    console.log("recursive = ", counter)
    if(counter <= limit){
        recursiveFunc(counter + 1, limit)
    } else{
        console.log("revursive stop")
    }   
    
    
}

recursiveFunc(1, 5)

console.log(this)

function showThis(){
    console.log(this)

    this.myName = "Dimas"
    console.log(this.myName)
}

const showThisArrow = () => {
    console.log(this)

    this.myName = "Dimas"
    console.log(this.myName)
}

Number()
Boolean()

showThis()
showThisArrow()