import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export type User = { 
    email:string
    role:string
}

export const  verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    try{

        // Bearer gjkhfgkhltmfghjdnkfgmdkgnjfgdfg
        const token = req.header("Authorization")?.split(" ")[1]

        if(!token){
            res.status(401).json({
                status:"unauthenticated",
                message:"cannot access this page",
                data:null
            })
            return 
        }

        const verifiedUser = await verify(token, String(process.env.JWT_KEY))

        if(!verifiedUser){
            res.status(401).json({
                status:"unauthenticated",
                message:"token invalid",
                data:null
            })
            return 
        }

        req.user  = verifiedUser as User // Request --> Request.user 

        next()

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    }
}

export const adminGuard = async (req:Request, res:Response, next:NextFunction) => {
    try{


        const user = req?.user as User 

        if(user?.role != "admin"){
            res.status(401).json({
                status:"unauthorized",
                message:"token invalid",
                data:null
            })
            return 
        }

        next()

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err),
            data:null
        })
    }
}