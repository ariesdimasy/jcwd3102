import express, { Application, json, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const app : Application = express()
const PORT = 4567

const prisma = new PrismaClient()

app.use(json())

app.get("/",(req:Request, res:Response) => {
    res.json({
        foo:"bar"
    })
})

app.post("/branches",async (req:Request, res:Response) => {

    try{
        const { name, location } = req.body
        /*
            INSERT INTO branches (name, location) VALUES ('name', 'location');

        */
        const branch = await prisma.branch.create({
            data:{
                name:name,
                location:location
            }
        });

        res.status(201).json({
            status:"success",
            message:branch
        })

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.get("/branches",async (req:Request, res:Response) => {
    try{ 

        interface BranchFilter {
            name? : any
            location? :any
            createdAt? : any
        }

        const { name, location, createdAt, page, take } = req.query

        const filterBranch : BranchFilter = {}

        if(name) {
            filterBranch.name = {
                not:{
                    contains:name,
                    // notIn:['JKT'],
                }
                
            }
        }

        if(location){
            filterBranch.location = {
                contains:location
            }
        }

        if(createdAt){
            filterBranch.createdAt = { 
                gte:new Date(createdAt as string) 
            }
        }

        // SELECT * FROM branches 

        // SELECT * FROM branches where name like '%name%' OR location like '%location%'
        const branches = await prisma.branch.findMany({
            where: filterBranch,
            orderBy:{
                id:'asc'
            },
            take:Number(take) || undefined,
            skip:(Number(take) * (Number(page) - 1)) || undefined,
        })

        res.status(200).json({
            status:"success",
            data:branches
        })

    } catch(err) {
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.get("/branchStats", async(req: Request, res:Response) => {
    try{

        const branchStat = await prisma.branch.aggregate({
            _max:{
                createdAt:true,
             
            },
            _min:{
                createdAt:true
            },
            _count:{
                id:true
            }
        })

        res.status(200).json({
            message:"success",
            data:branchStat
        })

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.patch("/branches/:id",async (req:Request, res:Response) => {
    try { 

        const id = Number(req.params.id)
        const { name, location } = req.body

        const branch = await prisma.branch.findUnique({
            where:{
                id:id
            }
        })

        if(!branch){
            res.status(404).json({
                status:"not found",
            })
        } else {
            // UPDATE branches SET name = 'name' , location='location' WHERE id = 'id'
            const branchUpdate = await prisma.branch.update({
                where:{
                    id:id
                },
                data:{
                    name:name,
                    location:location
                }
            })

            res.status(200).json({
                status:"update success",
                data:branchUpdate
            })
        }
    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.get("/branches/:id",async (req:Request, res:Response) => {
    try { 

        const id = Number(req.params.id)

        const branch = await prisma.branch.findUnique({
            where:{
                id:id
            },
            include:{
                classes:true
            }
        })

        if(!branch){
            res.status(404).json({
                status:"not found",
            })
        } else {
            res.status(200).json({
                status:"success",
                data:branch
            })
        }
    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.delete("/branches/:id", async(req:Request, res:Response) => {
    try { 

        const { id } = req.params

        const deleteBranch = await prisma.branch.delete({
            where:{
                id:Number(id)
            }
        })

        res.status(200).json({
            status:"delete success",
            data:deleteBranch
        })

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.get("/classes/:id",async (req:Request, res:Response) => {
    try { 
        
        const { id } = req.params
        
        const classDetail = await prisma.class.findUnique({
            where:{
                id:Number(id)
            },
            include:{
                branch:true
            }
        })

        if(!classDetail){
            res.status(404).json({
                message:"class not found"
            })
        } else {
        
            res.status(200).json({
                status:"success",
                data:classDetail
            })
        }

        

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.post("/classes",async (req:Request, res:Response) => {
    try { 
        
        const { name, startAt, endAt, branchId, isActive } = req.body
        
        const branchDetail = await prisma.branch.findUnique({
            where:{
                id:Number(branchId)
            }
        })

        if(!branchDetail){
            res.status(404).json({
                message:"branch not found"
            })
        } else {
            const createClass = await prisma.class.create({
                data:{
                    name:name,
                    startAt:new Date(startAt),
                    endAt:new Date(endAt),
                    isActive:isActive,
                    branchId:branchId
                }
            })
            
            res.status(201).json({
                status:"class create success",
                data:createClass
            })
        }

    } catch(err){
        res.status(500).json({
            status:"error",
            message:JSON.stringify(err)
        })
    }
})

app.listen(PORT,() => {
    console.log(" Application running on : ", PORT)
})

