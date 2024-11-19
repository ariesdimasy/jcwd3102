function queenMove(arr:string[][]){
    let res = 0
    let queenPos: number[] = [] // [4,3] // queenPos[1]
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] == "Q"){
                queenPos = [i,j]
                break
            }
        }
        if(queenPos.length > 0){
            break
        }
    }

    // loop vertical 
    for(let k = 0; k < arr.length; k++){ 
        if(arr[k][queenPos[1]] == "X"){
            res++
        }
    }

    //loop horizontal
    for(let l = 0; l < arr.length; l++){
        if(arr[queenPos[0]][l] == "X"){
            res++
        }
    }

    // [7,0] [6,1] [5,2] ([4,3]) [3,4] [2,5] [1,6] [0,7]
    // loop atas kanan  
    let x1 = queenPos[0] - 1
    for(let i = queenPos[1] + 1 ; i < arr.length; i++) {
        if(arr[x1][i] == "X"){
            res++
        }
        x1--
    }

    return res
}

console.log(queenMove([
  // 0 , 1, 2, 3,4, 5 , 6, 7  
    ["","","","","","","X","X"], // 0  [0,3]
    ["","","","X","","","",""], // 1  [1,3]
    ["","","X","X","","","",""], // 2  [2,3]
    ["","","","","","X","",""], // 3  [3,3]
    ["","","","Q","","","X",""],// 4  [4,3]
    ["","","","","","","",""],  // 5  [5,3]
    ["","","","","","","",""],  // 6  [6,3]
    ["","","","X","","","",""], // 7  [7,3]
])) // 3