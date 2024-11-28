import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../features/counter/counterSlice"

export default function Counter(){

    const count = useSelector(
        ( state:{ counter:{ value: number }} ) => state.counter.value
    )

    const dispatch = useDispatch()

    return (<div>
        <button onClick={() => dispatch(decrement())}> - </button>
        <span style={{ fontSize:32 }}>{count}</span>
        <button onClick={() => dispatch(increment())}> + </button>
    </div>)
}