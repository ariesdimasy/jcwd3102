import express,{ Application, NextFunction, Request, Response, json} from "express"
import productRouter from "./routers/product.router"
import fs from "fs/promises"

const app : Application = express()

app.use(json())
app.use((req:Request, res:Response, next:NextFunction) => {
    console.log("always execution")
    next()
})
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.log(err.stack)
    res.status(500)
})

app.use("/products",productRouter)

const PORT = 5667

app.get("/", (req:Request, res:Response, next:NextFunction) => {


    console.log(" first handler ")
    next()
},
(req:Request, res:Response, next:NextFunction) => {
    console.log(" second handler ")
    next()
},
(req:Request, res:Response, next:NextFunction) => {
    console.log(" third handler ")
    next()
},async (req:Request, res:Response) => {

    const read = await fs.readFile("./db.json","utf-8")
    const data = JSON.parse(read)

    res.status(200).send({
        "hello":'world',
        "data":data.products
    })
})

app.get("/:id",(req:Request, res:Response) => {

    const { id } = req.params
    const { search } = req.query

    if(Number(id) > 0 && Number(id) <= 10){
        res.status(200).send({
            "data":'detail',
            "search":search,
            "detail": {
                "id":id,
                "title":"world"
            }
        })
    } else {
        res.status(404).send({
            "data":'not found',
        })

    }
})

app.post("/",async (req:Request, res:Response) => {

    const { name, price, stock } = req.body

    if(name && price && stock ){

    
        const read = await fs.readFile("./db.json","utf-8")
        const data = JSON.parse(read)

        const id = Number(data.products[ data.products.length - 1 ].id) + 1 

        data.products.push({
            id, name, price, stock
        })

        const newData = data
      
        const dataString = JSON.stringify(newData,null,2) 

        await fs.writeFile("./db.json",dataString)
    
        res.status(201).send({
            "created":"success",
           
        })
    } else {
        res.status(400).send({
            "created":"error",
           
        })
    }


   
})

app.put("/:id",(req:Request, res:Response) => {

    const { id } = req.params
    const { name, title} = req.body

    res.status(200).send({
        "id":id,
        data:{
            name:name,
            title:title 
        },
        "updated":"success"
    })
})

app.delete("/:id",(req:Request, res:Response) => {
    res.status(200).send({
        "deleted":"success"
    })
})

app.get("/users/test/books/:bookId", (req:Request, res:Response) => {
    res.status(200).send({
        message:"success",
        data:"test"
    })
})

app.get("/users/:userId/books/:bookId", (req:Request, res:Response) => {

    const { userId, bookId } = req.params
    // const userId = req.params.userId
    // const bookId = req.params.bookId

    res.status(200).send({
        message:"success",
        data:{
            userId,
            bookId
        }
    })
    // res.render("./template/index.html")
})

app.listen(PORT,() => {
    console.log("Application run on port : ", PORT)
})