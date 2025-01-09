import { Request, Response } from "express"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const loginProcess = async (req:Request, res:Response) => {
    try{

        const { email, password } = req.body

        const findUser = await prisma.user.findFirst({
            where:{
                email:email,
                password:password
            }
        })

        if(findUser){
            res.status(200).json({
                status:"success",
                message:"login success",
                data:null
            })
        }else {
            res.status(404).json({
                status:"not found",
                message:"user not found",
                data:null
            })
        }

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    }
}

export const registerProcess = async (req:Request, res:Response) => {
    try {

        const { name, email, password } = req.body

        const register = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        })

        res.status(201).json({
            status:"success",
            message:"register user success",
            data:register
        })


    } catch(err) {
        console.log(err)
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    }
}