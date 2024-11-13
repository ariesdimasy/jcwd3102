function findSingelOne(arr : number[]){
    for(let i = 0; i < arr.length; i++){
        let decision = true  
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j] && i != j ){
                decision = false
                break 
            }
        }
        if(decision == true ){
            // console.log(" i = ", i)
            return arr[i]
        }
    }

    return -1
}

console.log(findSingelOne([1,2,1]))
console.log(findSingelOne([2,1,2,1,4]))