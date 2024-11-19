function sellStock(arr) {
    var largestProfit = 0; // 2 
    //          2  1 <      3
    for (var i = 0; i < arr.length; i++) {
        //      j = 3    3 < 3        arr[j] = 2
        for (var j = i + 1; j < arr.length; j++) {
            //             = 5   -   3
            var nowProfit = arr[j] - arr[i]; // 1 - 7
            //   2      >   2  
            if (nowProfit > largestProfit) {
                largestProfit = nowProfit; // 2 
            }
        }
    }
    return largestProfit;
}
console.log(sellStock([3, 2, 5]));
