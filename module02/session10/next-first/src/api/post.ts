"use client"

import axios from "axios"

export async function getPosts(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const posts = res.data
        return posts
    } catch(err){
        alert("err : "+JSON.stringify(err))
        return false
    }
}

export async function updatePost(){
    
} 