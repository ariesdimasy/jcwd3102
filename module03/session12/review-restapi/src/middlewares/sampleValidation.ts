import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator"

export const sampleValidate =  [
    body("item").notEmpty().withMessage("name is empty"),
    body("code").notEmpty()
    .withMessage("code is empty")
    .isAlphanumeric()
    .withMessage("code must be alphanumeric"),

    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({
                status:"error",
                message:errors.array(),
                data:null
            })
            return
        }
        next()

    }
]

// isSlug : pelatihan kerja dari yec --> pelatihan-kerja-dari-yec
// jual tiket konser green day februari
// /jual-tiket-konser-green-day-februari
// 
