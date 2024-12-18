"use client"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Test(){

    const [blogDetail, setBlogDetail] = useState({})
    
    useEffect(() => {
        async function getDetail(){
            const res = await axios.get("https://cdn.contentful.com/spaces/lvj02o4fveu0/environments/master/entries/5EjztmfqBekVZuV8zYQ5JD/?access_token=4i4y8ZV_mvVTa7P2fz1-RxkYeMVyp3Z0WfZUzHMBGFI")
            const data = res.data
            setBlogDetail(data?.fields)

        }
        getDetail()
    },[])

    return (
    <div className="p-10">
        <h1 className="text-xl bold text-center">{blogDetail.title}</h1>
        <div className="p-10">
        
            {blogDetail?.content1?.content.map((item, index) => {
                return <p  key={index} className="mb-4"> {item.content.map((item2, index) => {
                    return item2.value
                }).join(" ")} </p>
            })}
        </div>
    </div>)
}