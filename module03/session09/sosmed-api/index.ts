import express , { Application , Request, Response, json} from "express"
import authRouter from "./routers/auth.router"
import userRouter from "./routers/user.router"
import postRouter from "./routers/post.router"
import adminRouter from "./routers/admin.router"

const app : Application = express()
const port = 5678

app.use(json())

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use("/api/posts",postRouter)
app.use("/api/admin",adminRouter)

app.get("/",(req: Request, res:Response) => {
    res.send({
        status:"success",
        message:"sosmed API working",
        data:null
    })
})

app.listen(port, () => {
    console.log("applciation running on port = ", port)
}) 
