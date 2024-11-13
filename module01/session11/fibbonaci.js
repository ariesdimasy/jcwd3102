function fibonaci(num) {
    var previousNumber = 0;
    var currentNumber = 1;
    for (var i = 1; i <= num; i++) {
        var temp = previousNumber;
        previousNumber = currentNumber;
        currentNumber = previousNumber + temp;
    }
    return num > 0 ? currentNumber : 0;
}
console.log(fibonaci(0));
console.log(fibonaci(1));
console.log(fibonaci(2));
console.log(fibonaci(3));
console.log(fibonaci(4));
console.log(fibonaci(5));
console.log(fibonaci(6));
console.log(fibonaci(15));
