function binarySearch(arr, left, right, x){
    if(right >= left){
        let mid = left + Math.floor((right - left) / 2)
        
        if(arr[mid] == x) return mid

        if(arr[mid] > x){
            return binarySearch(arr, left, mid-1, x)
        }
        return binarySearch(arr, mid+1, right, x)
    }
    return -1
}
let arr = [2,3,4,10,40]
console.log(binarySearch(arr,0,arr.length-1,10))

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }
        }
    }

    return arr
}

console.log(bubbleSort([6,35,3,6,4,8,1,20,34]))

function selectionSort(input: number[]){
    for(let i = 0; i < input.length; i++){
        let min = i // kandidat minimum index
        for(let j = i+1; j < input.length; j++){
            if(input[j] < input[min]){
                min = j
            }
        }
        if(min != i){
            [input[i], input[min] ] = [input[min], input[i] ] 
        }

    }
    
    return input
}

console.log(selectionSort([6,35,3,6,4,8,1,20,34]))