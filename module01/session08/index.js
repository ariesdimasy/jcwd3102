var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, type) {
        this.salary = 0;
        this.fulltimeSalary = 100000;
        this.fulltimeBonusSalary = 75000;
        this.parttimeSalary = 50000;
        this.parttimeBonusSalary = 30000;
        this.overHour = 6;
        this.name = name;
        this.type = type;
    }
    Object.defineProperty(Employee.prototype, "addWorkHour", {
        set: function (workHour) {
            this.workHour = workHour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getWorkHour", {
        get: function () {
            return this.workHour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.calculateTotalSalary = function () {
        var left = 0;
        if (this.type == "fulltime") {
            if (this.workHour < this.overHour) {
                this.salary = this.workHour * this.fulltimeSalary;
            }
            else {
                left = this.workHour - this.overHour;
                this.salary = (left * this.fulltimeBonusSalary) + (this.overHour * this.fulltimeSalary);
            }
        }
        else if (this.type == "parttime") {
            if (this.workHour < this.overHour) {
                this.salary = this.workHour * this.parttimeSalary;
            }
            else {
                left = this.workHour - this.overHour;
                this.salary = (left * this.parttimeBonusSalary) + (this.overHour * this.parttimeSalary);
            }
        }
    };
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee(name) {
        return _super.call(this, name, "fulltime") || this;
    }
    return FulltimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name) {
        return _super.call(this, name, "parttime") || this;
    }
    return PartTimeEmployee;
}(Employee));
var employee1 = new FulltimeEmployee("Dimas");
employee1.addWorkHour = 8;
employee1.calculateTotalSalary();
console.log(employee1);
console.log(employee1.getSalary); // 750000
var employee2 = new PartTimeEmployee("Aries");
employee2.addWorkHour = 10;
employee2.calculateTotalSalary(); // 420000
console.log(employee2);
var students1 = [
    { name: "Dimas", email: "dimas@gmail.com" },
    { name: "Farida", email: "farida@gmail.com" },
];
var students2 = [
    { name: "Dimas", email: "dimas@gmail.com" },
    { name: "rina", email: "rina@gmail.com" }
];
function mergeStudent(stundents1, students2) {
    //kerjakan 
    var result = []; // kosong, length nya 0
    // [ {name:"Dimas", email:"dimas@gmail.com"}, {name:"Farida", email:"farida@gmail.com"}] , 2 
    for (var i = 0; i < students1.length; i++) {
        var decision = true; // kalau dia true, boleh masuk ke result 
        //            0 <     1  = false 
        for (var j = 0; j < result.length; j++) {
            if (students1[i].name == result[j].name) {
                decision = false; // dia tidak masuk ke result 
                break;
            }
        }
        // true == true
        if (decision == true) {
            result.push(students1[i]);
        }
    }
    for (var i = 0; i < students2.length; i++) {
        var decision = true; // masuk ke result 
        //             0 <      2 
        for (var j = 0; j < result.length; j++) {
            // dimas == dimas
            if (students2[i].name == result[j].name) {
                decision = false; // dia tidak masuk ke result 
                break;
            }
        }
        // false == true 
        if (decision == true) {
            result.push(students2[i]);
        }
    }
    return result;
}
console.log(mergeStudent(students1, students2));
var Player = /** @class */ (function () {
    function Player(name) {
        this.health = 100;
        this.power = 10;
        this.name = name;
    }
    Player.prototype.damage = function (power) {
        this.health = this.health - power;
    };
    Player.prototype.useItem = function (item) {
        if (item.health == 10) {
            this.health += item.health;
        }
        else if (item.power == 10) {
            this.power += item.power;
        }
    };
    Player.prototype.showStatus = function () {
        console.log(this);
    };
    return Player;
}());
var ShootingGame = /** @class */ (function () {
    function ShootingGame(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    ShootingGame.prototype.getRandomItem = function () {
        var random = Math.floor(Math.random() * 2); // 0 , 1 , 2 
        if (random == 0) {
            return { health: 10, power: 0 };
        }
        else if (random == 1) {
            return { health: 0, power: 10 };
        }
    };
    ShootingGame.prototype.start = function () {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(" ==== player status ===== ");
            this.player1.showStatus();
            this.player2.showStatus();
            console.log(" ==== get random item  ===== ");
            var item1 = this.getRandomItem();
            var item2 = this.getRandomItem();
            this.player1.useItem(item1);
            this.player2.useItem(item2);
            console.log(" ==== after get item === ");
            this.player1.showStatus();
            this.player2.showStatus();
            console.log(" ==== start shooting === ");
            this.player2.damage(this.player1.power);
            if (this.player2.health <= 0)
                break;
            this.player1.damage(this.player2.power);
            if (this.player1.health <= 0)
                break;
            console.log("            ");
        }
        console.log(" === after match === ");
        this.player1.showStatus();
        this.player2.showStatus();
        if (this.player1.health > 0) {
            console.log(this.player1.name, " WIN ");
        }
        else if (this.player2.health > 0) {
            console.log(this.player2.name, " WIN ");
        }
    };
    return ShootingGame;
}());
var player1 = new Player("Jotaro");
var player2 = new Player("Dio");
var arena = new ShootingGame(player1, player2);
arena.start();
function soal1(param) {
    var middle = Math.floor(param / 2); // 3  
    var result = [];
    if (param == 0) {
        return "invalid input";
    }
    //      i = 2   2 < 7
    for (var i = 0; i < param; i++) {
        // 2 == 3
        if (i == middle) {
            result.push("*");
            //        2 == 2 && 7 % 2 == 0
        }
        else if (i == middle - 1 && param % 2 == 0) {
            result.push("*");
        }
        else {
            result.push("");
        }
    }
    return result;
}
// test case
console.log(soal1(5));
/*
    output :
    ['','','*','','']
*/
console.log(soal1(4)); // ['','*','*','']
console.log(soal1(7)); // ['','','','*','','','']
console.log(soal1(10)); // ['','','','','*','*','','','','']
console.log(soal1(0)); // invalid
console.log(soal1(1)); // ['*']
