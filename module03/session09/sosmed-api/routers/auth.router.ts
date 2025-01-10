import { Request, Response } from "express"
import { Router } from "express"
import { loginProcess, registerProcess } from "./../controllers/auth.controller"

const router = Router()

function hello(req:Request, res:Response){

}

router.post("/login",loginProcess)
router.post("/register", registerProcess)

export default router