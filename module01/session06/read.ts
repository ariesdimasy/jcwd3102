let strAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function read01(height:number){
    
    let counter = 0
    for(let i = 0; i < height; i++){
        let row = ""
        for(let j = 0; j < height; j++){
            row += strAlphabet[counter]
            counter++
            if(counter == 26){
                counter = 0
            }
        }
        console.log(row)
    }
}
/*
ABCDEF
GHIJKL
MNOPQR
STUVWX
YZABCD
EFGHIJ
*/

read01(6)

function graduationDecision(score:number){
    if(score >= 85){
        return "LULUS"
    } else {
        return "TIDAK LULUS"
    }
}

function studentDataProcessing(data:Array<number>){
    let result : Array<string> = []
    for(let i = 0 ; i < data.length; i++){
        let decision = graduationDecision(data[i])
        result.push(decision)
    }
    return result
}

function read02(){
    console.log(strAlphabet)
    let dataStudent = [83,78,86,67,80,85,90,100,94,84,89]
    let res = studentDataProcessing(dataStudent)
    console.log(res)
}

// read02()

function read03(arr:Array<number>){

    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = 0
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }

    return arr

}

console.log(read03([1,2,3,4,5])) // 
console.log(read03([23,55,12,35,59,44,25])) // [25,44,59,35,12,55,23]

