var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [];
// const people : {name: string, age:number}[] = []
arr.push(1);
arr.push(2);
console.log(arr);
arr.pop();
console.log(arr);
function hello(name) {
    if (name === void 0) { name = 10; }
    return name;
}
console.log(hello(56)); // 
console.log(hello()); // 10 
console.log(hello(12)); // 12
console.log(hello(0)); // 12
var Stack = /** @class */ (function () {
    function Stack(maxSize) {
        if (maxSize === void 0) { maxSize = 10; }
        this.maxSize = 0;
        this.container = [];
        this.maxSize = maxSize;
    }
    Stack.prototype.push = function (num) {
        if (this.container.length == this.maxSize) {
            console.log("stack overflow");
        }
        else {
            this.container.push(num);
        }
    };
    Stack.prototype.pop = function () {
        if (this.container.length == 0) {
            console.log("stack underflow");
        }
        else {
            this.container.pop();
        }
    };
    Stack.prototype.getContainer = function () {
        return this.container;
    };
    return Stack;
}());
var obj1 = new Stack(10); // []
obj1.push(0);
console.log(obj1.getContainer()); // [0]
obj1.pop();
console.log(obj1.getContainer()); // []
obj1.pop(); // stack underflow
console.log(obj1.getContainer()); // []
obj1.push(34);
obj1.push(45);
obj1.push(33);
console.log(obj1.getContainer());
var noob = obj1.getContainer();
console.log(noob[2]);
obj1.push(1);
console.log(obj1.getContainer());
obj1.push(2);
console.log(obj1.getContainer());
obj1.push(3);
console.log(obj1.getContainer());
obj1.push(4);
console.log(obj1.getContainer());
obj1.push(5);
console.log(obj1.getContainer());
obj1.push(6);
console.log(obj1.getContainer());
obj1.push(7);
console.log(obj1.getContainer());
obj1.push(8);
console.log(obj1.getContainer());
obj1.push(9);
console.log(obj1.getContainer());
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.push = function (num) {
        this.container.push(num);
    };
    Queue.prototype.myShift = function () {
        return this.container.shift();
    };
    Queue.prototype.getElements = function () {
        return this.container;
    };
    Queue.prototype.bebas = function () {
        console.log("bebas");
    };
    return Queue;
}());
var myObj = new Queue();
myObj.push(1);
myObj.push(2);
myObj.push(3);
console.log(myObj.getElements());
myObj.myShift();
console.log(myObj.getElements());
myObj.bebas();
var students1 = [
    { name: "Dimas", email: "dimas@gmail.com" },
    { name: "Farida", email: "farida@gmail.com" },
];
var students2 = [
    { name: "Dimas", email: "dimas@gmail.com" },
    { name: "rina", email: "rina@gmail.com" }
];
var students = __spreadArray(__spreadArray([], students1, true), students2, true);
//                [[1,2,3],[4,5,6]]
//                [1,2,3,4,5,6]
console.log(students);
var newStudents = new Set(students);
console.log(newStudents);
var hobbies = new Set(["GTA 5", "Genshin Impact", "Counter Strike", "GTA 5", "Rocket League"]);
console.log(hobbies);
hobbies.add("PUBG");
hobbies.add("PVZ");
console.log(hobbies);
hobbies.delete("Genshin Impact");
console.log(hobbies);
hobbies.entries();
console.log(hobbies.entries());
console.log(hobbies.size);
let obj3 = new Map();
var obj34 = {
    name: "Dimas",
    age: 34
};
obj3.set("Daud", "001");
obj3.set("Buchanan", "002");
console.log(obj3);

for (let key in obj3) {
    console.log(`${key} = ${obj3[key]}`);
}