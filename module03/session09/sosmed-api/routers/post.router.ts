import { Router } from "express"
import { getPosts, createPost } from "./../controllers/post.controller"
import { verifyToken } from "../middlewares/auth.middleware"

const router = Router()

router.get("/",verifyToken,getPosts)
router.post('/',verifyToken,createPost) // /api/posts

export default router