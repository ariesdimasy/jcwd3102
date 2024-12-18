import { NextFunction, Request, Response, Router } from "express";
import fs from "fs/promises"

const router = Router()

router.get("/",(req:Request, res:Response, next:NextFunction ) => {
    console.log(" A. user router level ")
    next()
}, async (req:Request, res:Response) => {

    const read = await fs.readFile("./db.json","utf-8")
    const data = JSON.parse(read)
   
    // const users = data.users
    const { users } = data

    // next()
    res.json({
        "message":"success",
        "data":users
    })
    
})

router.post("/register",(req:Request, res:Response) => {

    const { name, gender, title } = req.body

    res.status(201).json({
        "message":"success",
        data:{
            name, gender, title
        }
    })
})

export default router 