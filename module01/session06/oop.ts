class User {
    public name:string
    private skill:string
    private age:number
    public static isStandUser = true
    // protected #test

    set setAge(age:number){
        if(age == 0){
            console.log("age must be more than 0")
            return 
        }
        this.age = age
    }

    get getAge(){
        return this.age
    }

    set setSkill(skill:string){
        this.skill = skill
    }

    get getSkill(){
        return this.skill
    }

    constructor(name:string , skill:string , age:number){
        this.name = name
        this.skill = skill 
        this.age = age
        console.log("user created")
    }
  
    public greeting(words){
        console.log("says : ", words)
        this.activatingSkill(this.skill)
    }
    private activatingSkill(skill:string){
        console.log(" activating : ",skill)
    }
    public showAge(){
        console.log(this.age)
    }

    public static standUsers() { 
        console.log(this.isStandUser)
        return ["Polnaref","Iggy","Vanilla Ice"]
    }
}


let dio = new User("Dio","stopping time",100)

console.log(dio)
// console.log(dio.age)
dio.showAge()
dio.greeting("THE WORLD")

dio.setAge = 0
console.log(dio.getAge)
// dio.age = 0

let jotaro = new User("Jotaro","stopping time", 17)
jotaro.greeting("Star platinum , the world")

function User2(name:string, age:number,stand_name:string, stand_power:string){
    this.name = name
    this.age = age
    this.stand_name = stand_name 
    this.stand_power = stand_power

    this.greeting = (str:string) => {
        console.log("says : ", str)
    }
}

let abdul = new User2("Mohammad Abdul",30,"Magician Red","Flame")
let polnaref = new User2("Polnaref",28,"Silver Chariot","sword")

console.log(abdul)

polnaref.greeting("Mohammed Abdul ? ")
abdul.greeting("Yes, Iam")

console.log(User.standUsers())
console.log(User.isStandUser)