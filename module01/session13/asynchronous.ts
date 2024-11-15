console.log("eksekusi")
setTimeout(() => {
    console.log("eksekusi setelah 3 detik")
},0)

function buy(money:number, spend:number, cb:(money1:number)=>void){
    let left = money - spend
    cb(left)
}

function buyPromise(money:number, spend:number){
    return new Promise((resolve:any, reject:any) => {
        //let left = money - spend
        if(money >= spend){
            let left = money - spend
            resolve(left)
        } else {
            reject("gak ngadong hepeng")
        }

    })
}

let myMoney = 90000

// buy(myMoney,10000,(money1) => {
//     console.log(" left : ",money1)
//     buy(money1, 20000, (money1) => {
//         console.log(" left : ", money1)
//         buy(money1, 20000, (money1) => {
//             console.log(" left : ", money1)
//             buy(money1, 20000, (money1) => {
//                 console.log(" left : ", money1)
//                 buy(money1, 20000, (money1) => {
//                     console.log(" left : ", money1)
//                 })
//             })
//         })
//     })
// })
async function runAsynAwait(){
    console.log("satu")
    try {
        let left = await buyPromise(myMoney,10000)
        console.log("left : ", left)
        left = await buyPromise(left, 20000)
        console.log("left : ", left)
    } catch(err){
        console.log(err)
    }
    
    console.log("dua")
}

function runSynchronous(){
    console.log("satu")
    buyPromise(myMoney,10000)
    .then((res) => {
        console.log(" left : ", res)
        return buyPromise(res, 20000)
    })
    .then((res) => {
        console.log(" left : ", res)
        return buyPromise(res, 40000)
    })
    .then((res) => {
        console.log(" left : ", res)
        return buyPromise(res, 40000)
    })
    .then((res) => {
        console.log(" left : ", res)
    })
    .catch((err) => {
        console.log("err : ",err)
    })
    
    console.log("dua")
}

// runSynchronous()
runAsynAwait()