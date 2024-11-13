function myJoin(arr:any[]){
    return arr.join("")
}

function checkAnagram(str:string, str1:string){
    let strLetter = str.toLowerCase()
    let str1Letter = str1.toLowerCase()

    let strLetterSplit = strLetter.split('')
    let str1LetterSplit = str1Letter.split('')

    let strSort = strLetterSplit.sort()
    let str1Sort = str1LetterSplit.sort()

    let strJoin = myJoin(strSort)
    let str1Join = myJoin(str1Sort)

    //let a = str.toLowerCase().split('').sort().join('')

    if(strJoin == str1Join){
        return true
    }
    return false
}

console.log(checkAnagram("Aries","Seira"))
console.log(checkAnagram("Ann","Ana"))