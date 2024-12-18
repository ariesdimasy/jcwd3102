import { Router, Request, Response } from "express"
import fs from "fs/promises"

interface IExpense {
    id:number,
    title:string, 
    nominal:number,
    category:string,
    type:string,
    date:string
}

const router = Router()

router.get("/",async(req:Request, res:Response) => {

    const read = await fs.readFile("./db.json","utf-8")
    const data = JSON.parse(read)
    const expenses : IExpense[] = data.expenses

    const total = expenses.map((item) => item.nominal ).reduce((a,b) => a + b)

    res.status(200).json({
        message:"success",
        data:expenses,
        total:total
    })
})

router.get("/:id",async (req:Request, res:Response) => {

    const { id } = req.params

    const read = await fs.readFile("./db.json","utf-8")
    const data = JSON.parse(read)

    const expenses : IExpense[] = data.expenses

    const expense = expenses.find((item:IExpense, index:number) => item.id == Number(id))

    if(!expense) { 
        res.status(404).send({
            message:"gak ada cuy"
        })
        return 
    } 

    res.status(200).json({
        message:"success",
        data:expense
    })

})

router.get("/category/total",async (req:Request, res:Response) => {

    const { category } = req.query

    if(category){
        try{
            const read = await fs.readFile("./db.json","utf-8")
            const data = JSON.parse(read)
        
            const expenses : IExpense[] = data.expenses
        
            const total = expenses.filter((item:IExpense) => {
                return item.category == category // array of object
            }).map((item:IExpense) => {
                return item.nominal // [45500000,15000, 89000000]
            })?.reduce((a, b) => a + b )
        
            res.status(200).send({
                "message":"success",
                "category":category || 0,
                "total":total
            })
        }catch(err){
            res.status(500).send({
                "message":"error",
                "category":"",
                "total":0
            })
        }
        
    } else {
        res.status(400).send({
            message:"error",
            "category":"",
            total:0
        })
    }
   
})

router.put("/:id",async (req:Request, res:Response) => {
    const { id } = req.params
    const { title, nominal, category, type, date } = req.body

    const read = await fs.readFile("./db.json","utf-8") // string 
    const data = JSON.parse(read) // json object 

    const expenses : IExpense[] = data.expenses

    const index = expenses.findIndex((item:IExpense, index:number) => item.id == Number(id))

    if(index == -1) { 
        res.status(404).send({
            message:"gak ada cuy"
        })
        return 
    } 

    expenses[index] = {
        id:Number(id),
        title, 
        nominal, 
        category, 
        type, 
        date
    }

    // replace expenses in data to new expenses
    data.expenses = expenses
    const dataString = JSON.stringify(data,null,2)

    await fs.writeFile("./db.json",dataString)

    res.status(200).send({
        message:"update success",
        data:data.expenses[index]
    })

})

router.delete("/:id",async (req:Request, res:Response) => {
    const { id } = req.params

    const read = await fs.readFile("./db.json","utf-8") // string 
    const data = JSON.parse(read) // json object 

    const expenses : IExpense[] = data.expenses

    const index = expenses.findIndex((item:IExpense, index:number) => item.id == Number(id))

    if(index == -1) { 
        res.status(404).send({
            message:"gak ada cuy"
        })
        return 
    }

    expenses.splice(index, 1)// di hapus 

     // replace expenses in data to new expenses
     data.expenses = expenses
     const dataString = JSON.stringify(data,null,2)
    
     // ditulis lagi 
     await fs.writeFile("./db.json",dataString)
 
     res.status(200).send({
         message:"update success",
     })

})

export default router