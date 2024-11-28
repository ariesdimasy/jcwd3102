import { useReducer } from "react"
import { counterReducer } from "./../../reducers/counterReducer"

export default function ComponentuseReducer(){
    
    const [count, dispatch] = useReducer( counterReducer , { count : 0 })

    const decrement = () => {
        dispatch({ type:"decrement" , payload:1})
    }

    const increment = () => {
        dispatch({ type:"increment" , payload:1})
    }
    
    return (<div style={{ backgroundColor:"dodgerblue"}}>
        <button onClick={() => decrement()}> - </button>
        <span> Counter : {count.count}</span>
        <button onClick={() => increment()}> + </button>
    </div>)
}