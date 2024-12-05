"use client"

import axios from "axios"
const access_token = "CmDC9ybw4rIQgVmACwokaZw0HdaD4StFHR7BGAHkt2g"

export async function getBlogs(){
    const res = await axios.get(`https://cdn.contentful.com/spaces/nqcy1dligadm/environments/master/entries?access_token=${access_token}`)
    const blogs = res.data.items
    return blogs
}