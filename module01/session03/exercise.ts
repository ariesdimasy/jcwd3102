let str = "madami"// 0 - 5
let res = ""
          //    5      6 >= 0; 
for(let i = str.length - 1; i >= 0; i--) {
    res += str[i]
}

console.log(res)

function formatNumber(num:number){

    let result : string = ""

    let numStr = String(num) // "1000"

    let j = 1
    for(let i = numStr.length-1; i >= 0; i--) {
        
        if(j % 3 == 0){
            result += numStr[i] + "."
        } else {
            result += numStr[i] 
        }
        j++
    }

    // result = "000.1"
    console.log(result)

}
// 343.565.765.455.756.765.756.7
// 100.0
formatNumber(1000)
formatNumber(15250)

function capital(str:string){
    let result : string = ''
    for(let i = 0; i < str.length; i++){
        if(i == 0 || str[i-1] == ' '){
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }

    return result
}

console.log(capital('hello world'))

console.log(typeof "hello")

let h = 1
if(typeof h === 'string'){
    console.log(1)
} else if(typeof h === 'number'){
    console.log(2)
} else{
    console.log(3)
}

function encryptA(word:string){
    let result = ""

    for(let i= 0; i < word.length; i++){
        if(word[i].toLowerCase() === "a"){
            result += "*"
        } else {
            result += word[i]
        }
    }

    return result
}

console.log(encryptA("Aries Dimas"))
console.log(encryptA("Yudhistira"))

function calculateBMI(height : number, weight:number ) { 
    // 
    let result = weight / (height**2)
}