import axios from "axios"
import { useState, useEffect } from "react"
import { Button, Card, Textarea } from "@chakra-ui/react"

export default function Posts(){

    const user = JSON.parse(localStorage.getItem("loginData") || '{}')
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState("")

    const getPosts = async () => {
        try {

            const postList = await axios.get("http://localhost:4550/posts?_sort=created_at,-views")
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
                setPost('')
                getPosts()
            }
        } catch(err) {
            alert(JSON.stringify(err))
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (<div style={{ width: '50%', margin:'0 auto'}}>
        
        <Textarea rows={5} style={{ 'width':'100%', padding:"10px"}} name="post" onChange={(e) => setPost(e.target.value)}  >{post}</Textarea>
        <div>
            <Button w={'100%'} bgColor={'blue.500'} color='white' onClick={() => handlePost()}> Posting </Button>
        </div>
        {posts?.map((item:any, index) => {
            return(
                <Card.Root key={index} margin={"20px 0"} padding={"10px"}>
                    <Card.Body >
                        {item.post}
                    </Card.Body>
                    <hr />
                    <Card.Footer>
                        {new Date(item.created_at).toLocaleDateString()}
                    </Card.Footer>
                </Card.Root>
            )
        })}
    </div>)
}