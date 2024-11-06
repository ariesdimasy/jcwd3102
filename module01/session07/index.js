function checkEqual(obj1, obj2) {
    var loop = obj1;
    if (Object.keys(obj1).length < Object.keys(obj2).length) {
        loop = obj2;
    }
    // return false 
    for (var key in loop) {
        // undefined != 4
        // oj2[c]    != obj1[c]
        if (obj2[key] != obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(checkEqual({ a: 2 }, { a: 1 })); // false
console.log(checkEqual({ a: "hello" }, { a: 1 })); // false 
console.log(checkEqual({ b: 2, a: 1, c: 4 }, { a: 1, b: 2, c: 4, d: 23 }));
function soal1(param) {
    for (var i = param.length - 1; i > 0; i--) {
        console.log(param[i]);
    }
}
// soal1("Aries Dimas Yudhistira")
// soal1("ABC")
/*
C
B
A
*/
function factorial(num) {
    var result = 1;
    for (var i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));
var b = "dimas";
var c = b.split("");
console.log(b); // 
console.log(c); // [d,i,m,a,s]
c[2] = "n";
var d = c.join("");
console.log(d); // "dinas"
function total(num) {
    // 0 == 0
    if (num == 0) {
        return 0;
    }
    else {
        //1 - 1= 0
        return num + total(num - 1); // 6 + 5
    }
}
console.log(total(6));
function switchProperty(param) {
    var result = [];
    for (var i = 0; i < param.length; i++) {
        var obj = {};
        for (var key in param[i]) {
            // console.log(key,":",param[i][key])
            obj[param[i][key]] = key;
        }
        result.push(obj);
    }
    return result;
}
// { name:'david', age:20}
// { }
///
// name:david
// age : 34
// name : dimas
// age: 17
console.log(switchProperty([
    { name: "david nugraha", age: 34 },
    { name: "dimas", age: 17 },
    { name: "haris", age: 32 },
    { name: "aries", age: 24 },
]));
function intersectionObject(obj1, obj2) {
    var result = {};
    for (var key in obj1) {
        if (obj1[key] == obj2[key]) {
            result[key] = obj1[key];
        }
    }
    return result;
}
console.log(intersectionObject({ a: 1, b: 2 }, { a: 1, c: 3 }));
