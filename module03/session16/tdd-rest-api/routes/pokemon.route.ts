import { Router, Request,Response } from "express";
import axios from "axios"

const router = Router()

router.get("/",async (req:Request, res:Response) => {
    try {

        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon")
        res.status(200).json(pokemons.data)

    } catch(err){
        res.status(500).send(JSON.stringify(err))
    }
})

export default router