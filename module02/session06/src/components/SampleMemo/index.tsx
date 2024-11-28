import { useMemo, useState } from "react"

export default function SampleMemo(){
    
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const incrementNumber = () => setNumber(number + 1)
    const incrementCount = () => setCount(count + 1)

    const isNumberEven = useMemo(() => {
        let i = 0; 
        while(i < 2000){
            i++
        }
        return number % 2 == 0
    },[number])
    
    return (<div style={{ backgroundColor:"bisque", width:200, height:200}}>
        <button onClick={() => incrementNumber()}>
            number : {number}
        </button>
        <div>{isNumberEven ? "even" : "odd"}</div>
        <button onClick={() => incrementCount()}>
            count : {count}
        </button>
    </div>)
}