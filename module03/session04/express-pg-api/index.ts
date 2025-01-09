import express, { Application, Request, Response, json } from "express"
import pool from "./config/db";
import IProduct from "./interfaces/IProduct"

const app : Application = express()
const PORT = 6677;

app.use(json())

app.get("/",async (req:Request, res:Response) => {
    try { 

        const result = await pool.query("SELECT * FROM products")
        const products : IProduct[] = result.rows

        res.status(200).send({
            message:"success",
            data:products
        })
    } catch(err){
        res.status(500).send({
            message:err
        })
    }
})

app.post("/",async (req:Request, res:Response) => {
    const { product_name, description, price, stock, category_id  } = req.body

    try {

        const q = await pool.query(`INSERT INTO products 
            (product_name, description, price, stock, category_id) 
            values
            ('${product_name}','${description}',${price},${stock},${category_id})
        `)

        res.send({
            message:"success"
        })

    } catch(err){
        res.send({
            message:err
        })
    }

})

pool.connect((err, client, release) => {
    if(err){
        return  console.log("err : ", err)
    }

    console.log("success connection")
    release()
})

app.listen(PORT, () => {
    console.log(" application running on PORT : ", PORT)
})

