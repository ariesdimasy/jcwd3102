import { useEffect, useRef, useState } from "react"

export default function SampleRef(){

    const [name, setName] = useState<string>("")
    const inputRef = useRef<null | HTMLInputElement>(null)
    const renderCount = useRef<number | HTMLInputElement>(0)

    useEffect(() => {
        inputRef.current?.focus()
    },[])

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    },[name])

    return (<div style={{ width:200, height:200, backgroundColor:"chocolate"}}>
        <input 
            type="text" 
            name="name" 
            ref={inputRef} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
        <h2>{renderCount.current}</h2>
        <button onClick={() => inputRef.current?.focus()}> focus </button>

    </div>)
}