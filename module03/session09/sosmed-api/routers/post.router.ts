import { Router } from "express"
import { getPosts, createPost } from "./../controllers/post.controller"

const router = Router()

router.get("/",getPosts)
router.post('/', createPost) // /api/posts

export default router