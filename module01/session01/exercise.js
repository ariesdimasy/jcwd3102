var lh = 10;
var width = 15;
var result = lh * width;
console.log(result);
var parimeter = 2 * (lh + width);
console.log(parimeter);
var PI2 = 3.14;
var radius = 5;
var diameter = radius * 2;
var circumference = 2 * PI2 * radius;
var area = PI2 * radius * radius;
console.log("diameter : ".concat(diameter, " , circumference : ").concat(circumference, ", area : ").concat(area));
var a = 80;
var b = 65;
console.log(180 - (a + b));
var days = 5460;
var leftYear = days % 365; // days - (sisa berapa tahun * 365 ) 
var year = days / 365; // mencari tahu berapa tahun dalam hitungan hari 
//===========================
var leftDays = leftYear % 30; // 13 , 73 % 30 = 2 = 13 
var month = leftYear / 30;
console.log("".concat(year, " year, ").concat(month, " month, ").concat(leftDays, " day"));
console.log('-----------');
var date1 = new Date("2022-01-20");
var date2 = new Date("2022-01-22");
var result2 = date2 - date1;
console.log(result);
