// disini adalah koding untuk ngambil datanya 
"use client"

import axios from "axios"
import { IProductRequest } from "@/interfaces/IProductRequest"

export async function getProducts(){
    const res = await axios.get("https://allieddirection-us.backendless.app/api/data/products",{
        params:{
            pageSize:50,
            sortBy:"'created' desc"
        }
    })
    const data = res.data
    return data
}

export async function postProduct(values:IProductRequest){
    const res = await axios.post("https://allieddirection-us.backendless.app/api/data/products",values)
    const data = res.data
    return data
}

export async function deleteProduct(id:string) { 
    const res = await axios.delete(`https://allieddirection-us.backendless.app/api/data/products/${id}`)
    const data = res.data
    return data
}
