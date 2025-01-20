import { Request, Response } from "express"
import {PrismaClient} from "@prisma/client"
import { genSalt , hash, compare } from "bcrypt"
import { sign } from "jsonwebtoken"

const prisma = new PrismaClient()

export const loginProcess = async (req:Request, res:Response) => {
    try{

        const { email, password } = req.body

        const findUser = await prisma.user.findFirst({
            where:{
                email:email,
            }
        })

        if(!findUser){
           throw new Error("invalid email or password")
        }

        const passCompare = await compare(password, String(findUser?.password))

        if(!passCompare){
            throw new Error("invalid email or password")
        }

        //jwt 
        const jwtPayload = {email:findUser?.email, role:findUser?.role}
        const token = sign(jwtPayload, String(process.env.JWT_KEY) )

        if(findUser){
            res.status(200).json({
                status:"success",
                message:"login success",
                data:{
                    id:findUser?.id,
                    name:findUser?.name,
                    email:findUser?.email,
                    token:token
                }
            })
        }else {
            res.status(400).json({
                status:"bad request",
                message:"email or password invalid",
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

        const checkUser = await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        if(checkUser){
            res.status(400).json({
                status:"bad request",
                message:"email already exists",
                data:null
            })
            return 
        }

        const salt = await genSalt(10)
        const passCrypt = await hash(password, salt)

        const register = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: passCrypt
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