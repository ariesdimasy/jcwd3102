import express, { Application, json, NextFunction, Request, Response, urlencoded } from "express"
import cors from "cors"

import SampleRouter from "./routers/sample.router"

const PORT = 8800
 
export default class App {

    private app:Application

    constructor(){
        this.app = express()
        this.configure()
        this.router()
        this.hanldeError()
    }

    private configure() : void {
        this.app.use(cors())
        this.app.use(json())
        this.app.use(urlencoded({ extended: true }))
    }

    private router() { 

        const sampleRouter = new SampleRouter()

        this.app.use("/sample",sampleRouter.getRouter())
    }

    private hanldeError(){
        this.app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
            console.error("Error : ", err.stack)
            res.status(500).send("Error Message : "+err.message)
        })
    }

    public start(){
        this.app.listen(PORT,() => {
            console.log("Application running on port :",PORT)
        })
    }
}