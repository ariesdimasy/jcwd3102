var User = /** @class */ (function () {
    function User(name, skill, age) {
        this.name = name;
        this.skill = skill;
        this.age = age;
        console.log("user created");
    }
    Object.defineProperty(User.prototype, "setAge", {
        // protected #test
        set: function (age) {
            if (age == 0) {
                console.log("age must be more than 0");
                return;
            }
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setSkill", {
        set: function (skill) {
            this.skill = skill;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getSkill", {
        get: function () {
            return this.skill;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.greeting = function (words) {
        console.log("says : ", words);
        this.activatingSkill(this.skill);
    };
    User.prototype.activatingSkill = function (skill) {
        console.log(" activating : ", skill);
    };
    User.prototype.showAge = function () {
        console.log(this.age);
    };
    User.standUsers = function () {
        console.log(this.isStandUser);
        return ["Polnaref", "Iggy", "Vanilla Ice"];
    };
    User.isStandUser = true;
    return User;
}());
var dio = new User("Dio", "stopping time", 100);
console.log(dio);
// console.log(dio.age)
dio.showAge();
dio.greeting("THE WORLD");
dio.setAge = 0;
console.log(dio.getAge);
// dio.age = 0
var jotaro = new User("Jotaro", "stopping time", 17);
jotaro.greeting("Star platinum , the world");
function User2(name, age, stand_name, stand_power) {
    this.name = name;
    this.age = age;
    this.stand_name = stand_name;
    this.stand_power = stand_power;
    this.greeting = function (str) {
        console.log("says : ", str);
    };
}
var abdul = new User2("Mohammad Abdul", 30, "Magician Red", "Flame");
var polnaref = new User2("Polnaref", 28, "Silver Chariot", "sword");
console.log(abdul);
polnaref.greeting("Mohammed Abdul ? ");
abdul.greeting("Yes, Iam");
console.log(User.standUsers());
console.log(User.isStandUser);
