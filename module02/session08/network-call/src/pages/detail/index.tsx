import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail(){

    const { id } = useParams()

    const [user, setUser] = useState<{ id:number, name:string, title:string, address:string, age:number} | null>(null) 
    // const id = searchParams.get("id")

    useEffect(() => {
        handleGetDetailUser()
    },[])

    const handleGetDetailUser = async () => {
        const fetchDetailUser = await axios.get(`http://localhost:4500/users/${id}`)
        const data = fetchDetailUser.data
        setUser(data)
    }
    

    return (<div>
        <h1>{user?.name}</h1>
        <hr></hr>
        <div> Title : {user?.title}</div>
        <div> Age : {user?.age}</div>
        <div> Address : {user?.address}</div>
    </div>)
}