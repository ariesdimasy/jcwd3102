import { Router, Request, Response } from "express"
import { getPosts, createPost } from "./../controllers/post.controller"
import { verifyToken } from "../middlewares/auth.middleware"

const router = Router()

router.get("/",verifyToken,getPosts)
router.post('/',verifyToken,createPost) // /api/posts
router.get("/job/detail/programmer",(req:Request, res:Response) => {
    res.send({
       status:"success",
       message:"lowongan programmer"
    })

})
router.get("/:name/:number/:username",(req:Request, res:Response) => {

    const { name, number, username } = req.params

    res.send({
        name, number, username
    })

})


export default router