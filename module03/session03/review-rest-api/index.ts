import express, { Application, NextFunction, Request, Response, json } from "express";
import userRouter from "./router/user.router"
import expenseRouter from "./router/expense.router"

const app : Application = express()

app.use(json()) // middleware level Application 
app.use((req:Request, res:Response, next:NextFunction) => {
    console.log(" D. application level ")
    next()
})
app.use("/users",userRouter)
app.use("/expenses",expenseRouter)

const PORT : number = 4560 

app.get("/", (req:Request, res:Response) => {

    const { search } = req.query

    res.json({
        search:search,
        hello:"world"
    })
})

app.listen(PORT, () => {
    console.log(" application run on port : ", PORT)
})

// http://localhost:4500/?search=komputer