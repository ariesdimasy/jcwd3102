class Student { 
    public name:string
    public email:string
    public age:Date
    public score:number

    constructor(name:string, email:string, age:Date, score:number){
        this.name = name 
        this.email = email
        this.age = age
        this.score = score
    }
}

function calculateStudentData(students:Array<Student>){
    let score = {
        highest:students[0].score,
        lowest:students[0].score,
        average:0
    }

    let age = {
        highest:students[0].age,
        lowest:students[0].age,
        average:0
    }

    let totalScore = 0
    let totalAge = 0

    for(let i = 0; i < students.length; i++){
        totalScore += students[i].score
        if(score.highest <= students[i].score ){
            score.highest  = students[i].score
        } else if(score.lowest >= students[i].score) { 
            score.lowest  = students[i].score
        }
    }

    score.average = Math.floor(totalScore / students.length)

    // for(let i = 0; i < students.length; i++){

    // }
    return { age, score }

}

let students = [
    new Student("Aries","aries@gmail.com",new Date("22-04-1991"), 89),
    new Student("Dimas","dimas@gmail.com",new Date("22-04-1993"), 78),
]

console.log(calculateStudentData(students))