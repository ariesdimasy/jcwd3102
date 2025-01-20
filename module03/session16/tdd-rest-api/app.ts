import express,{ Application, Request, Response } from "express"
import userRouter from "./routes/user.route"
import pokemonRouter from "./routes/pokemon.route"

const app : Application = express()
const PORT = 5678

app.use("/api/users",userRouter)
app.use("/api/pokemons", pokemonRouter)

app.get("/",(req:Request, res:Response) => {
    res.send({
        status:"success",
        message:"TDD REST API",
        data:null
    })
})

app.listen(PORT, () => {
    console.log("Application running on port : ", PORT)
})

export default app