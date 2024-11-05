'strict mode';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function comparation(a, b, c) {
    if (a >= b && a >= c) {
        if (b > c) {
            console.log("a:".concat(a, " >= b:").concat(b, " >= c:").concat(c));
        }
        else if (c >= b) {
            console.log("a >= c >= b");
        }
    }
    else if (b >= a && b >= c) {
        if (c >= a) {
            console.log("b >= c >= a");
        }
        else if (a >= c) {
            console.log("b >= a >= c");
        }
    }
    else if (c >= a && c >= b) {
        if (a >= b) {
            console.log("c >= a >= b");
        }
        else if (b > a) {
            console.log("c >= b >= a");
        }
    }
}
comparation(40, 30, 20);
comparation(40, 40, 20);
var car = {
    color: "#fff000",
    name: "BMW",
    'speed': 100,
    // price:1000000000,
    // price:undefined,
    'hello-world': "the world over heaven",
    run: function () {
        console.log("run in ", this.speed, " km/h");
    }
};
console.log(car);
console.log(car.color);
car.run();
car.price = 2300000000;
console.log(car.price);
delete car.price;
console.log(car);
var speed = 'name';
console.log(car['hello-world']);
console.log(car[speed]);
// console.log(car.engine)
// console.log(car.engine?.weight)
console.log(Object.keys(car));
var myCar = car;
myCar.name = "Honda Civic";
console.log(car.name); // Honda Civic
var test = "test";
var test2 = test;
test = "test2";
console.log(test2); // test / test2
for (var key in car) {
    if (key == 'name') {
        continue;
    }
    console.log(key, " : ", car[key]);
}
function setAssignVar(person) {
    console.log(person);
    var name = person.name, age = person.age, Skill = person.Skill;
    // let name = person.name
    // let age = person.age
    // let Skill = person.Skill
    console.log(name, " : ", age, " : ", Skill);
}
setAssignVar({
    name: "Dimas",
    age: 17,
    Skill: "Digital Marketer"
});
var _a = ["dimas", function () {
        console.log("hello");
    }], myName = _a[0], setName = _a[1];
// let myName = "dimas"
// let setName = function(){
//     console.log("hello")
// }
console.log(myName);
setName();
var obj1 = {
    name: "Daud"
};
var obj2 = {
    name: "David",
    email: "daud@gmail.com"
};
obj1.name = "Isac";
var finalObject = __assign(__assign({}, obj2), obj1);
console.log(finalObject);
var person1 = Object.create(obj1);
person1.name = "Ishaq";
console.log(obj1);
