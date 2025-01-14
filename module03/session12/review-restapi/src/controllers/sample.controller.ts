import { NextFunction, Request, Response } from "express"
import prisma from "../prisma"
import transporter from "./../helpers/nodemailer"

export default class SampleController { 
    async getSampleData(req:Request, res:Response, next:NextFunction){
        try {

            const err = false 

            if(err){
                throw new Error("Error Happened!")
            }

            const samples = await prisma.sample.findMany()

            res.status(200).json({
                status:"success",
                message:"get data success",
                data:samples
            })
        } catch(err){
            next(err)
        }
        
    }

    async postSampleData(req:Request, res:Response, next:NextFunction) { 
        try {
            const { item, code } = req.body
            const { file } = req

            // const formData = new FormData

            // formData.append("name", item);
            // formData.append("code", code)

            if(!file) throw new Error("No file uploaded")

            const createSample = await prisma.sample.create({
                data:{
                    name:item, code, image:file.filename
                }
            })

            res.status(201).json({
                status:"success",
                message:`${file.filename} upload success, post item success`,
                data:createSample
            })
        } catch(err) {
            next(err)
        }
    }

    async sendEmail(req:Request, res:Response, next:NextFunction){
        try {

            await transporter.sendMail({
                from:"aries@gmail.com",
                to:"alhusna901@gmail.com",
                subject:"hello world",
                html:"<h1> hello from Dimas </h1> <p> orang terkaya se tangerang </p>"
            })

            res.status(200).json({
                status:"success",
                message:"send email success",
                data:null
            })

        }catch(err){
            next(err)
        }
    }
}