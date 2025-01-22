import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient()

type User = { 
    email:string
    role:string
}

export const getPosts = async (req:Request, res:Response) => {
    try{

        const { keyword } = req.query

        const posts = await prisma.post.findMany({
            include:{
                user:{
                    select:{
                        name:true,
                        email:true,
                        image:true,
                        role:true
                    }
                }
            },
            orderBy:{
                created_at:'desc'
            }
        })

        res.status(200).json({
            status:"success",
            message:"get posts success",
            data:posts
        })

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    } 
}

export const createPost = async (req:Request, res:Response) => {
    try {

        const { content } = req.body 

        const user = req?.user as User

        console.log("user => ", user)

        const checkUser = await prisma.user.findFirst({
            where:{
                email:user?.email
            }
        })

        if(!checkUser){
            res.status(404).json({
                status:"not found",
                message:"user not found",
                data:null
            })
            return
        }

        const insertPost = await prisma.post.create({
            data:{
                content:content,
                user_id:checkUser.id,
                image:''
            }
        })
       
        res.status(201).json({
            status:"success",
            message:"create post success",
            data:insertPost
        })

    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(" error code : ", err.code)
        }

        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    }
}