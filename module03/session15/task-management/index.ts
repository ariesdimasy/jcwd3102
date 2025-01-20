import express,{ Application, Request, Response} from "express"
import { scheduleTask } from "./cron/scheduleTask"
import exampleQueue from "./queues/queue"

const app : Application = express()

const PORT = 4567

scheduleTask()

app.get("/",(req:Request, res:Response) => {
    res.send({
        "task":"management"
    })
})

app.get("/enqueue",async (req:Request, res:Response) => {
    await exampleQueue.add("exampleJob",JSON.stringify({ data:"some data"}))
    res.send({
        "message":"add data success"
    })
})

app.listen(PORT, () => {
    console.log("application running on port : ", PORT)
})







