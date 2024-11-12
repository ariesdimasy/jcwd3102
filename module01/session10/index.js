function binarySearch(arr, left, right, x) {
    if (right >= left) {
        var mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x) {
            return binarySearch(arr, left, mid - 1, x);
        }
        return binarySearch(arr, mid + 1, right, x);
    }
    return -1;
}
var arr = [2, 3, 4, 10, 40];
console.log(binarySearch(arr, 0, arr.length - 1, 10));
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([6, 35, 3, 6, 4, 8, 1, 20, 34]));
function selectionSort(input) {
    var _a;
    for (var i = 0; i < input.length; i++) {
        var min = i; // kandidat minimum index
        for (var j = i + 1; j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }
        if (min != i) {
            _a = [input[min], input[i]], input[i] = _a[0], input[min] = _a[1];
        }
    }
    return input;
}
console.log(selectionSort([6, 35, 3, 6, 4, 8, 1, 20, 34]));
