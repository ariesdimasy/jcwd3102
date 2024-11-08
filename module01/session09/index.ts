const arr : number[] = []
// const people : {name: string, age:number}[] = []

arr.push(1)
arr.push(2)

console.log(arr)

arr.pop()

console.log(arr)

function hello(name : number = 10){
    return name
}

console.log(hello(56)) // 
console.log(hello()) // 10 
console.log(hello(12)) // 12
console.log(hello(0)) // 12

class Stack { 
    private maxSize : number = 0
    private container : number[] = []

    constructor(maxSize : number = 10, ){
        this.maxSize = maxSize
    }

    push(num: number){
        if(this.container.length == this.maxSize){
            console.log("stack overflow")
        } else {
            this.container.push(num)
        }
    }

    pop(){
        if(this.container.length == 0){
            console.log("stack underflow")
        } else {
            this.container.pop()
        }
    }

    getContainer(){
        return this.container
    }
}

let obj1 = new Stack(10) // []
obj1.push(0)
console.log(obj1.getContainer()) // [0]
obj1.pop()
console.log(obj1.getContainer()) // []
obj1.pop() // stack underflow
console.log(obj1.getContainer()) // []

obj1.push(34)
obj1.push(45)
obj1.push(33)

console.log(obj1.getContainer())
let noob = obj1.getContainer()
console.log(noob[2])

obj1.push(1)
console.log(obj1.getContainer())
obj1.push(2)
console.log(obj1.getContainer())
obj1.push(3)
console.log(obj1.getContainer())
obj1.push(4)
console.log(obj1.getContainer())
obj1.push(5)
console.log(obj1.getContainer())
obj1.push(6)
console.log(obj1.getContainer())
obj1.push(7)
console.log(obj1.getContainer())
obj1.push(8)
console.log(obj1.getContainer())
obj1.push(9)
console.log(obj1.getContainer())

interface IQueue {
    push(num: number) : void
    myShift() : number | undefined
    getElements() : number[]
}

class Queue implements IQueue { 

    private container : number[] = []

    push(num: number){
        this.container.push(num)
    }

    myShift() {
        return this.container.shift()   
    }

    getElements(){
        return this.container
    }

    bebas(){
        console.log("bebas")
    }
}

let myObj = new Queue()

myObj.push(1)
myObj.push(2)
myObj.push(3)

console.log(myObj.getElements())

myObj.myShift()

console.log(myObj.getElements())

myObj.bebas()

interface IStudent { 
    name:string
    email:string
}

const students1 : Array<IStudent> = [
    {name:"Dimas", email:"dimas@gmail.com"},
    {name:"Farida", email:"farida@gmail.com"},
   
] 

const students2 : Array<IStudent> = [
    {name:"Dimas",  email:"dimas@gmail.com"},
    {name:"rina",  email:"rina@gmail.com"}
]

const students = [...students1, ...students2]
//                [[1,2,3],[4,5,6]]
//                [1,2,3,4,5,6]


console.log(students)

const newStudents = new Set<{ name:string , email:string}>(students)

console.log(newStudents)

const hobbies = new Set<string>(["GTA 5","Genshin Impact","Counter Strike","GTA 5","Rocket League"])
console.log(hobbies)

hobbies.add("PUBG")
hobbies.add("PVZ")
console.log(hobbies)

hobbies.delete("Genshin Impact")

console.log(hobbies)

hobbies.entries()

console.log(hobbies.entries())

console.log(hobbies.size)

let obj3  = new Map<string, string>()
let obj34 : {name:string, age:number} = {
    name:"Dimas",
    age:34
}

obj3.set("Daud","001")
obj3.set("Buchanan","002")

console.log(obj3)

for(const key in obj3){
    console.log(`${key} : ${obj3[key]}`)
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

for(const k in object){
    console.log(`${k} : ${object[k]}`)
}
