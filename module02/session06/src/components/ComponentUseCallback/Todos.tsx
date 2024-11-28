import { memo } from "react"

interface ITodos {
    todos:string[]
    addTodo:() => void
}

function Todos(props:ITodos) { 

    const { todos, addTodo } = props
    // const todos = props.todos
    // const addTodo = props.addTodo

    console.log("child render")
    return (<div>
        <h2> My Todos </h2>
        {todos.map((item, index) => {
            return (<li key={index} >{item}</li>)
        })}
        <button onClick={addTodo}> Add todo </button>
    </div>)
}

export default memo(Todos)