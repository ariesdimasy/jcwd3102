
for(var i = 0; i <=5 ; i += 3){
    console.log("hello = ", i)
}

console.log(i)

for(let i = 5; i <= 100 ; i *= 2){
    console.log("hello = ", i)
}

for(let i = 0; i <= 5 ; i = i + 1){
    console.log("hello = ", i)
}

// for(let i = 0; i <= 5 ; i-=1){
//     console.log("hello = ", i)
// }

// for(let i = 0; i <= 5 ; ){
//     console.log("hello = ", i)
// }

// for(let i = 0; ;i++ ){
//     console.log("hello = ", i)
// }

let j = 0 // awalan

while(j <= 5){
    if(j == 2) continue;
    console.log("hello while ", j)
    
    j++ // j = j + 1
}

console.log(j)// 

while(false){
    console.log("hello")
}

do{
   
    
    console.log("hello do while ", j)
    j++ //
     
} while (j <= 10)

console.log(j) // 11

for(let i = 0; ;i++ ){
    
    if(i == 14) continue;
    console.log("hello infinite = ", i)
    if(i == 20) break
}

