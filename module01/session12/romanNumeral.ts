function romanNumeral(input:string){
    const obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let res = 0
                 // 3 < 3  
    for(let i = 0; i < input.length; i++){
        // 1             >= undefined       OR 3 == 4 -1 
        if(obj[input[i]] >= obj[input[i+1]] || i == input.length-1){
            res += obj[input[i]] // 14 + 5 
        }else if(obj[input[i]] < obj[input[i+1]]){ // i = 1
            res += obj[input[i] + input[i+1]] // res = 10 + 4 = 14  
            i++
            // i = 2
        }   
    }

    return res
}

console.log(romanNumeral("LVII"))
console.log(romanNumeral("MCMXCIV"))
console.log(romanNumeral("XIV"))