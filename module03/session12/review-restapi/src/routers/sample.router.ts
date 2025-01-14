import { Router } from "express";
import SampleController from "./../controllers/sample.controller" 
import { sampleValidate } from "../middlewares/sampleValidation";
import { uploader } from "../uploader";
// import { Request, Response, NextFunction } from "express";
// import { body, validationResult } from "express-validator"

export default class SampleRouter {
    private sampleController : SampleController
    private router : Router

    constructor(){
        this.sampleController = new SampleController()
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(){
        this.router.get("/",this.sampleController.getSampleData)
        this.router.post("/send-email", this.sampleController.sendEmail)
        this.router.post("/",
            uploader("IMG","/images").single("file"),
            sampleValidate,
            
        // [
        //     body("item").notEmpty().withMessage("Name must be filled"),
        //     body("code").notEmpty().withMessage("code must be filled"),
        //     (req:Request, res:Response, next:NextFunction) => {
        //         const errors = validationResult(req)
        //         if(!errors.isEmpty()){
        //             res.status(400).json({
        //                 status:"error",
        //                 message:errors.array(),
        //                 data:null
        //             })
        //             return
        //         }
        //         next()
        
        //     }
        // ],
        this.sampleController.postSampleData)
    }

   

    public getRouter(){
        return this.router
    }
}