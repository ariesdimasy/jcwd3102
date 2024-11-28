import { useState, useCallback } from "react"
import Todos from "./Todos"

export default function ComponentUseCallback(){
    
    const [count , setCount] = useState(0)
    const [todos, setTodos] = useState<string[]>([])

    const addTodo = useCallback(() => {
        setTodos((t) => [...t,"New Todo"])
    },[todos])

    const increment = () => {
        setCount(count + 1)
    }
    
    return (<div>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count : {count}
            <button onClick={increment}> + </button>
        </div>
    </div>)
}
