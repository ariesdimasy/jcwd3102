import { Router } from "express";
import { getUsers, getUserDetail, getUserDetailPosts, updateUserProfile } from "./../controllers/user.controller"
// import { verifyToken } from "../middlewares/auth.middleware";
import { uploader } from "../uploader";


const router = Router()

router.get("/",getUsers)
router.get("/:id",getUserDetail)
router.get("/:id/posts",getUserDetailPosts)
router.put("/:id",uploader("IMG","/images").single("file"),updateUserProfile)

export default router