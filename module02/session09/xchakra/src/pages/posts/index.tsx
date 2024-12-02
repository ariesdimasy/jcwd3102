import axios from "axios"
import { useState, useEffect } from "react"
import { Button, Card } from "@chakra-ui/react"

export default function Posts(){

    const user = JSON.parse(localStorage.getItem("loginData") || '{}')
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState("")

    const getPosts = async () => {
        try {

            const postList = await axios.get("http://localhost:4550/posts")
            const posts = postList.data
            setPosts(posts)

        } catch (err) { 
            alert(JSON.stringify(err))
        }
    }

    const handlePost = async () => {
        try {
            const postTweet = await axios.post("http://localhost:4550/posts",{
                user_id:user.id,
                post:post,
                created_at:new Date()
            })

            if(postTweet){
                alert("post success")
                getPosts()
            }
        } catch(err) {
            alert(JSON.stringify(err))
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (<div>
        <textarea rows={5} cols={100} name="post" onChange={(e) => setPost(e.target.value)}  >{post}</textarea>
        <Button bgColor={'blue.500'} color='white' onClick={() => handlePost()}> Posting </Button>
        {posts?.map((item:any, index) => {
            return(
                <Card.Root key={index} margin={"20px 10px"} padding={"10px"}>
                    <Card.Body >
                        {item.post}
                    </Card.Body>
                    <Card.Footer>
                        {item.created_at}
                    </Card.Footer>
                </Card.Root>
            )
        })}
    </div>)
}