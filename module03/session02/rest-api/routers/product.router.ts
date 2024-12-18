import { Router, Request, Response } from "express";
import fs from "fs/promises"

const router = Router()

router.get('/',(req:Request, res:Response) => {
    
    res.status(200).send({
        "message":"success",
        data:[
            {
                id:1,
                product_name:"RTX 3080 msi 12GB"
            }
        ]
    })
})

router.post("/",async (req:Request, res:Response) => {
    const { name, price, stock } = req.body

    if(name && price && stock ){

    
        const read = await fs.readFile("./db.json","utf-8") // string 
        const data = JSON.parse(read) // object or  array of object 

        const id = Number(data.products[ data.products.length - 1 ].id) + 1 

        const { products } = data // products bentuk datanya array 
        products.push({
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

export default router

// http://localhost:5677/provinces/:provinceId/cities
/* 
[
    {
        id:1,
        city:"jakarta utara"
    },
     {
        id:2,
        city:"jakarta selatan"
    }
]
*/

// http://localhost:5677/provinces/:provinceId/cities/:cityId
// http://localhost:5677/api/computer-hardware?search=Mouse+Gaming
// http://localhost:5677/api/computer-hardware/image.jpg // gak boleh 
// POST http://localhost:5677/api/computer-hardware-create/ gak boleh 
// PUT http://localhost:5677/api/computer-hardware-update/ gak boleh 


//  http://localhost:5677/api/computer-hardwares POST
//  http://localhost:5677/api/computer-hardwares PUT
//  http://localhost:5677/api/computer-hardwares GET
//  http://localhost:5677/api/computer-hardwares/:id GET {}
//  http://localhost:5677/api/computer-hardwares/:id DELETE

// http://localhost:5677/api/computer-hardware/search/:keyword GET

// http://localhost:5677/api/computer-hardware?search=Gaming+Keyboard GET
/* 
    {
        id:1,
        city:"jakarta utara",
        desc:"lorem ipsum",
        kecamatan:[
            {
                'name':'tanjung priok'
            }
        ]
    },
    
*/

// title : msi RTX 3030 12 GB 
// slug : msi-rtx-380-12-gb