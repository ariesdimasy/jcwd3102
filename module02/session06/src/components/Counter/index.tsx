import { useState, useEffect } from "react"

interface ICounter { 
    start:number, 
    operation:"add" | "multiply"
    num:number
}

export default function Counter(props:ICounter){

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [show, setShow] = useState(false)

    useEffect(() => {
        setCount(props.start)
        console.log("run first time")
    },[])

    useEffect(() => {
     
        console.log("run every state changed")
    })

    useEffect(() => {
        console.log("run for name")
    },[name])

    useEffect(() => {
        console.log("run for age")
    },[age])


    return (<div style={{width:'200px', height:"200px", border:'1px solid black'}}>
        <div style={{ fontSize:30, fontWeight:'bold'}}> {count} </div>
        <button style={{ textAlign:'center'}} onClick={() =>  {
            if(props.operation == "add"){
                setCount(count + props.num)
            } else if (props.operation == "multiply"){
                setCount(count * props.num)
            }
        }}> {props.operation} </button>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            // onKeyUp={(e) => setName(e.target.value)}
           
        />
        <input 
            type="number" 
            name="age" 
            value={age} 
            onChange={(e) => setAge(Number(e.target.value))}
            // onKeyUp={(e) => setName(e.target.value)}
           
        />
       <button onClick={() => setShow(!show)}> Say Hi</button>
       {show && <h2>Hi {name} your age : {age}</h2>}
    </div>)
}

// 