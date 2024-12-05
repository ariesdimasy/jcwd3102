"use client"

import axios from "axios"
const access_token = "CmDC9ybw4rIQgVmACwokaZw0HdaD4StFHR7BGAHkt2g"

export async function getBlogs(){
    const res = await axios.get(`https://cdn.contentful.com/spaces/nqcy1dligadm/environments/master/entries?access_token=${access_token}&include=1`)
    const assets = res.data.includes.Asset // [ {} ]
    const blogs = res.data.items.map((item:any,index:number) => {

        return {
            ...item,
            /*
            name:item.name,
            number:item.number 
            key:item.key 
            */
            image_url:assets[index]?.fields?.file?.url
        }
    })

    return blogs
}