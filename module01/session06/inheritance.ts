// Parent Class
class Transportation{
    name:string
    price:number
    constructor(name:string, price:number ){
        this.name = name
        this.price = price
    }
    move(){
        console.log(this.name, " move ")
    }
}

// Children Class
class Car extends Transportation {
    wheel:number
    constructor(name:string, price:number ){
    
        super(name, price)
    }
}

class Bus extends Transportation { 
    capacity:number
    constructor(name: string, price:number){
        super(name , price)
    }
}

class Blue {

}

let car1 = new Car("BMW",2300000000)

console.log(car1)
car1.move()

console.log(car1 instanceof Blue) // false
console.log(car1 instanceof Car) // true 
console.log(car1 instanceof Bus) // false
console.log(car1 instanceof Transportation) // true 