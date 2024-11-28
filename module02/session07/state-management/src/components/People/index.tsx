
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux" 
import { handleInsertPerson } from "../../features/people/peopleSlice"

export default function People(){

   
    const people = useSelector(
        ( state:{ people:{ value: string[] }} ) => state.people.value
    )

    const dispatch = useDispatch()

    const [person, setPerson] = useState("")
    // const [people, setPeople] = useState<string[]>([
    //     "Aries",
    //     "Dimas"
    // ])

    // const handleInsertPerson = () => {
    //     const newData = people.concat(person)
    //     setPeople(newData)
    //     setPerson("")
    // }

    return (<div>
        <h2> List People </h2>
        <hr></hr>
        <input 
            type="text" value={person} 
            onChange={(e) => setPerson(e.target.value)}  
            onKeyDown={(e) => {
                if(e.key == "Enter" && person != ""){
                    dispatch(handleInsertPerson(person))
                    setPerson("")
                }
            }}
        />
        <button onClick={() => { 
           dispatch(handleInsertPerson(person))
           setPerson("")
         }}> insert person </button>
        <ul>
        {people.map( (item:string) => {
            return <li>{item}</li>
        } )}
        </ul>
    </div>)
}