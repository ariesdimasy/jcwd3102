'strict mode'

function comparation(a:number, b:number, c:number){
    if(a >= b && a >= c) { 
        if (b > c) { 
            console.log(`a:${a} >= b:${b} >= c:${c}`)
        } else if(c >= b){
            console.log("a >= c >= b")
        }
    } else if(b >= a && b >= c){
        if (c >= a) {
            console.log("b >= c >= a")
        } else if(a >= c){
            console.log("b >= a >= c")
        }
    } else if(c >= a && c >= b){
        if (a >= b) {
            console.log("c >= a >= b")
        } else if(b > a){
            console.log("c >= b >= a")
        }
    }
}

comparation(40,30,20)
comparation(40,40,20)

interface ICar  { 
    color:string
    name:string
    price?:number
    speed:number
    run:Function
    'hello-world':string
}

type I2Car = {
    color:string
    name:string
    price:number
}

let car : ICar = {
    color:"#fff000",
    name:"BMW",
    'speed':100,
    // price:1000000000,
    // price:undefined,
    'hello-world':"the world over heaven",
    run(){
        console.log("run in ",this.speed," km/h")
    }
   
}

console.log(car)

console.log(car.color)

car.run()

car.price = 2300000000
console.log(car.price)

delete car.price

console.log(car)

let speed = 'name'

console.log(car['hello-world'])
console.log(car[speed]) 

// console.log(car.engine)
// console.log(car.engine?.weight)

console.log(Object.keys(car))

let myCar : ICar = car

myCar.name = "Honda Civic"

console.log(car.name) // Honda Civic

let test = "test"

let test2 = test 

test = "test2"

console.log(test2) // test / test2

for (let key in car){
    
    if(key == 'name'){
        continue
    }
    console.log(key," : ", car[key])
}
// console.log(item)

interface IPerson { 
    name: string
    age: number
    Skill: string
}

function setAssignVar(person: IPerson){

    console.log(person)

    let { name, age, Skill } = person
    // let name = person.name
    // let age = person.age
    // let Skill = person.Skill

    console.log(name," : ", age, " : ", Skill)

}

setAssignVar({
    name:"Dimas",
    age:17,
    Skill:"Digital Marketer"
})

let [myName, setName] = ["dimas", function(){
    console.log("hello")
}]
// let myName = "dimas"
// let setName = function(){
//     console.log("hello")
// }

console.log(myName)
setName()

let obj1 = {
    name:"Daud"
}

let obj2 = {
    name:"David",
    email:"daud@gmail.com"
}

obj1.name = "Isac"

let finalObject = {...obj2, ...obj1}


console.log(finalObject)

let person1 = Object.create(obj1)

person1.name = "Ishaq"

console.log(obj1)