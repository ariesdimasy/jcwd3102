"use client"
import { useState, useEffect } from "react";
import { getPosts } from "./../api/post"
import { DataListItem, DataListRoot } from "@/components/ui/data-list"

export default function Home() {

  const [posts, setPosts] = useState([])
    
  const handleGetPosts = async () => {
    const posts = await getPosts()
    setPosts(posts)
  }

  useEffect(() => {
    handleGetPosts()
  },[])

  return (
    <>
      <h1> Hello World</h1>
      <hr></hr>
      
      <DataListRoot divideY="2px" style={{ width:"400px", margin:"0 auto"}}>
        {posts.map((item: {
          id:number,
          title:string, 
          body:string
        }) => (
          <DataListItem key={item.id} label={item.title as string} value={item.body} />
        ))}
      </DataListRoot>
      
    </>
  );
}
