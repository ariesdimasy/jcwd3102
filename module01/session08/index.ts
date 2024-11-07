class Employee {
    name:string
    workHour:number
    type:string
    salary:number = 0

    fulltimeSalary : number  =  100000
    fulltimeBonusSalary : number = 75000
    parttimeSalary : number = 50000
    parttimeBonusSalary : number = 30000
    overHour : number = 6

    constructor(name:string, type:string){
        this.name = name
        this.type = type
    }

    set addWorkHour(workHour){
        this.workHour = workHour
    }

    get getWorkHour(){
        return this.workHour
    }

    get getSalary(){
        return this.salary
    }

    calculateTotalSalary(){
        let left = 0
        if(this.type  == "fulltime"){
            if(this.workHour < this.overHour){
                this.salary = this.workHour * this.fulltimeSalary
            } else {
                left = this.workHour - this.overHour
                this.salary = (left * this.fulltimeBonusSalary) + (this.overHour * this.fulltimeSalary)
            }
        } else if(this.type == "parttime") {
            if(this.workHour < this.overHour){
                this.salary = this.workHour * this.parttimeSalary
            } else {
                left = this.workHour - this.overHour
                this.salary = (left * this.parttimeBonusSalary) + (this.overHour * this.parttimeSalary)
            }
        }
    }
}

class FulltimeEmployee extends Employee {
    
    constructor(name:string ){
        super(name,"fulltime")
    }
}

class PartTimeEmployee extends Employee {
    constructor(name:string ){
        super(name,"parttime")
    }
}

let employee1 : FulltimeEmployee  = new FulltimeEmployee("Dimas")
employee1.addWorkHour = 8
employee1.calculateTotalSalary()

console.log(employee1)
console.log(employee1.getSalary) // 750000

let employee2 : PartTimeEmployee = new PartTimeEmployee("Aries")
employee2.addWorkHour = 10
employee2.calculateTotalSalary() // 420000

console.log(employee2)

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

function mergeStudent(stundents1:Array<IStudent>, students2:Array<IStudent>){
    //kerjakan 
    let result : Array<IStudent> = []// kosong, length nya 0
    // [ {name:"Dimas", email:"dimas@gmail.com"}, {name:"Farida", email:"farida@gmail.com"}] , 2 
    for(let i = 0; i < students1.length; i++){
        let decision : boolean = true // kalau dia true, boleh masuk ke result 
         //            0 <     1  = false 
        for(let j = 0; j < result.length; j++){
            if(students1[i].name == result[j].name){
                decision = false // dia tidak masuk ke result 
                break
            }
        }
            // true == true
        if(decision == true){
            result.push(students1[i])
        }
    }
    for(let i = 0; i < students2.length; i++){
        let decision : boolean = true // masuk ke result 
        //             0 <      2 
        for(let j = 0; j < result.length; j++){
            // dimas == dimas
            if(students2[i].name == result[j].name){
                decision = false // dia tidak masuk ke result 
                break
            }
        }
        // false == true 
        if(decision == true){
            result.push(students2[i])
        }
    }

    return result
}

console.log(mergeStudent(students1, students2))

class Player { 
    name:string
    health:number = 100
    power:number = 10 
    constructor(name:string){
        this.name = name
    }

    damage(power){
        this.health  = this.health - power
    }

    useItem(item : {health:number, power:number}){
        if(item.health == 10){
            this.health += item.health
        } else if(item.power == 10){
            this.power += item.power
        }
    }

    showStatus(){
        console.log(this)
    }
}

class ShootingGame {

    player1 : Player
    player2 : Player

    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() : any {
        let random = Math.floor(Math.random() * 2)// 0 , 1 , 2 
        if(random == 0) {
            return { health: 10 , power: 0}
        } else if(random == 1){
            return { health: 0 , power: 10}
        }
    }

    start(){
        while(this.player1.health > 0 && this.player2.health > 0){
            console.log(" ==== player status ===== ")
            this.player1.showStatus()
            this.player2.showStatus()

            console.log(" ==== get random item  ===== ")
            let item1 = this.getRandomItem()
            let item2 = this.getRandomItem()

            this.player1.useItem(item1)
            this.player2.useItem(item2)

            console.log(" ==== after get item === ")
            this.player1.showStatus()
            this.player2.showStatus()

            console.log(" ==== start shooting === ")

            this.player2.damage(this.player1.power)

            if(this.player2.health <= 0) break 

            this.player1.damage(this.player2.power)

            if(this.player1.health <= 0) break

            console.log("            ")

        }

        console.log(" === after match === ")
        this.player1.showStatus()
        this.player2.showStatus()

        if(this.player1.health > 0){
            console.log(this.player1.name, " WIN ")
        } else if(this.player2.health > 0) {
            console.log(this.player2.name, " WIN ")
        }
    }
}

let player1 = new Player("Jotaro")
let player2 = new Player("Dio")

let arena = new ShootingGame(player1, player2)
arena.start()

function soal1(param)
{
    let middle = Math.floor(param / 2) // 3  
    let result : string[] = []

    if(param == 0) {
        return "invalid input"
    }

    //      i = 2   2 < 7
    for(let i = 0 ; i < param; i++){
        // 2 == 3
        if(i == middle){
            result.push("*")
        //        2 == 2 && 7 % 2 == 0
        } else if(i == middle - 1 && param % 2 == 0){
            result.push("*")
        } else {
            result.push("")
        }
    }

    return result
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid

console.log( soal1(1)) // ['*']