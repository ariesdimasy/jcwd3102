function majorityElement(arr:number[]){

    let sortArr = arr.sort((a,b) => a-b)
    let half = Math.floor(arr.length / 2) // setengah dari panjang array di bulatkan kebawah 

    let resultNumber = 0
    let countNumber = 0
    for(let i = 0 ; i < sortArr.length; i++){
        resultNumber = arr[i] // 2
        countNumber += 1 // 6
        // 5 > 5
        if(countNumber > half){
            return resultNumber
        }
            // true                 &&   false 
        if(resultNumber != arr[i+1] && arr[i+1] != undefined){
            countNumber = 0
        }
    }

    
    console.log(resultNumber, countNumber)
    return -1

}

console.log(majorityElement([3,2,3])) // [2,3,3] // 3
console.log(majorityElement([1,2,2,1,5,2,2,1]))
console.log(majorityElement([2,2,2,2,2,5,5,5,5,5])) // [2,2,2,2,2,5,5,5,5,5]