var Student = /** @class */ (function () {
    function Student(name, email, age, score) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
    return Student;
}());
function calculateStudentData(students) {
    var score = {
        highest: students[0].score,
        lowest: students[0].score,
        average: 0
    };
    var age = {
        highest: students[0].age,
        lowest: students[0].age,
        average: 0
    };
    var totalScore = 0;
    var totalAge = 0;
    for (var i = 0; i < students.length; i++) {
        totalScore += students[i].score;
        if (score.highest <= students[i].score) {
            score.highest = students[i].score;
        }
        else if (score.lowest >= students[i].score) {
            score.lowest = students[i].score;
        }
    }
    score.average = Math.floor(totalScore / students.length);
    // for(let i = 0; i < students.length; i++){
    // }
    return { age: age, score: score };
}
var students = [
    new Student("Aries", "aries@gmail.com", new Date("22-04-1991"), 89),
    new Student("Dimas", "dimas@gmail.com", new Date("22-04-1993"), 78),
];
console.log(calculateStudentData(students));
