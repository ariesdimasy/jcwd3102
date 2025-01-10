import { Request, Response } from "express"
import { Router } from "express"
import { verifyToken, adminGuard } from "./../middlewares/auth.middleware"

const router = Router()

router.get("/dashboard",verifyToken, adminGuard,(req:Request, res:Response) => {
    res.status(200).json({
        message:"ADMIN DASHBOARD"
    })
})

export default router