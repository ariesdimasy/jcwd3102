// import hobbies from "./add"
import hobbies ,{ add, obj as myObj } from "./add"
import Queue from "./queue"

console.log(add(2,3))

console.log(hobbies)
console.log(myObj)

let q1 = new Queue()
q1.add(1)
q1.add(2)
q1.add(3)
q1.add(4)

function promiseTimeOut(seconds:number, processNumber:number){
    return new Promise((resolve, reject) => {
        if(seconds > 0){
            setTimeout(() => {
                resolve(`[LOG] queue ${processNumber} done in ${seconds} seconds`)
            },seconds * 1000)
        } else {
            reject("senconds must be more than 0")
        }
       
    })
}

async function runProcess(q:number[]){
    for(let i = 0; i < q.length; i++){
        let rand = Math.random() * 10
        let res = await promiseTimeOut(rand, q[i])
        console.log(res)
    }
}

runProcess(q1.list)