import { Router, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const router = Router()

router.get("/",async (req:Request, res:Response) => {

    try {

        const users = await prisma.user.findMany()

        res.status(200).send({
            message:"OK",
            users:users
        })

    } catch(err) {

        res.status(500).send({
            status:"error",
            message:JSON.stringify(err)
        })
    }

})

export default router