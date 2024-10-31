var myName = "Aries Dimas Yudhistira";
console.log(myName);
var age = 17;
console.log(myName, age);
var hobbies = ["GTA V", "Cs 1.6", "genshin Impact", "rocket league"];
console.log(hobbies);
var person = {
    name: "dimas",
    title: "Digital Marketer",
    age: 17
};
console.log(person);
var test = true;
console.log(test);
console.log(myName.split(""));
console.log(myName.split(' '));
console.log(myName.split("a"));
console.log("Aries \nDimas \nYudhistira\n".concat(myName, "\n"));
console.log(typeof age.toString());
console.log(typeof age);
var myNumber = -12.34;
console.log(myNumber.toFixed());
console.log(parseFloat("123.23"));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY < -5465675678794564435);
console.log(person.name);
console.log(Number);
console.log(String(34.5));
console.log(typeof String(true));
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean("")); // false 
console.log(Boolean(" ")); // true 
console.log(Boolean("abc")); // true
console.log(Boolean(null)); // false 
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
// thruty falsy
console.log(myNumber + 90);
console.log(90 + "ab");
console.log("ab" + 90);
var myDate = new Date();
console.log(myDate);
console.log(new Date(365 * 24 * 60 * 60 * 1000));
console.log(new Date("2024/10/28"));
console.log(new Date("2024/10/28 16:05:00"));
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myNumber * 12);
console.log(Math.pow(myNumber, 6));
var num = -12;
var res = num;
res += 10;
res += 5;
console.log(res);
myNumber = 100;
myNumber += 50; // myNumber = myNumber + 50
myNumber += 60;
myNumber *= 2; // myNumber = myNumber * 2 
myNumber *= 3;
console.log(myNumber);
console.log(myNumber++); // 1260 / 1261 
console.log(myNumber); // 1261
console.log(++myNumber);
var num2 = 45;
var num3 = 78;
var num4 = "78";
console.log("---------------------");
console.log(num2 == num3); // false 
console.log(num2 <= num3); // false
console.log(num3 < num2); // true
console.log(num3 > num2); // false
console.log(num3 >= num2); // false
console.log(num3 == num4); // false
console.log(num3 === num4); // false

console.log(num3 == num4) // false
console.log(num3 === num4) // false

console.log(num3 != num2) // true
console.log(!true)
console.log(!false)