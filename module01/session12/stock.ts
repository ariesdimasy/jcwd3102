function sellStock(arr:number[]){
    let largestProfit = 0 // 2 
    //          2  1 <      3
    for(let i = 0; i < arr.length; i++){
        //      j = 3    3 < 3        arr[j] = 2
        for(let j = i+1; j < arr.length; j++){
            //             = 5   -   3
            let nowProfit = arr[j] - arr[i] // 1 - 7
            
            //   3      >   2  
            if(nowProfit > largestProfit){
                largestProfit = nowProfit // 3
            }

        }
    }

    return largestProfit
}

console.log(sellStock([3,2,5,1]))
console.log(sellStock([1,2,5,2])) // 1 + 4 = 5  // 1 -3 