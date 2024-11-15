"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Queue.prototype.add = function (value) {
        this.list.push(value);
    };
    return Queue;
}());
exports.default = Queue;
