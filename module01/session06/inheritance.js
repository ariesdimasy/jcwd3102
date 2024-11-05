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
// Parent Class
var Transportation = /** @class */ (function () {
    function Transportation(name, price) {
        this.name = name;
        this.price = price;
    }
    Transportation.prototype.move = function () {
        console.log(this.name, " move ");
    };
    return Transportation;
}());
// Children Class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, price) {
        return _super.call(this, name, price) || this;
    }
    return Car;
}(Transportation));
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(name, price) {
        return _super.call(this, name, price) || this;
    }
    return Bus;
}(Transportation));
var Blue = /** @class */ (function () {
    function Blue() {
    }
    return Blue;
}());
var car1 = new Car("BMW", 2300000000);
console.log(car1);
car1.move();
console.log(car1 instanceof Blue); // false
console.log(car1 instanceof Car); // true 
console.log(car1 instanceof Bus); // false
console.log(car1 instanceof Transportation); // true 
