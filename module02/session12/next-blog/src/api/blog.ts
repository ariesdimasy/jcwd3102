"use client"

import axios from "axios"
const access_token = "CmDC9ybw4rIQgVmACwokaZw0HdaD4StFHR7BGAHkt2g" // permission / pemberian ijin untuk mengakses API contentful 
// endpoint adalah url yang return nya JSON

// mengambil data list blog ( content model ) dari contentful
export async function getBlogs(){
    
    const res = await axios.get(`https://cdn.contentful.com/spaces/nqcy1dligadm/environments/master/entries?access_token=${access_token}&include=1`)
    const assets = res.data.includes.Asset // [ {} ]
    const blogs = res.data.items.map((sukasukague:any,samaaja:number) => {

        return {
            ...sukasukague,
            /*
            name:item.name,
            number:item.number 
            key:item.key 
            */
            id:sukasukague?.sys?.id,
            image_url:assets[samaaja]?.fields?.file?.url
        }
    })

    return blogs // array of object 

}

export async function getBlogDetail(entriesId:string){
    alert("entriedId = "+entriesId)
    const res = await axios.get(`https://cdn.contentful.com/spaces/nqcy1dligadm/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`)
    //const assets = res.data.includes.Asset // [ {} ]
    const blogDetail = res.data.fields
    return blogDetail
}