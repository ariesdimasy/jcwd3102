import { useState } from "react"
import style from "./MyText.module.css" // hanya untuk component ini aja

interface IMyText {
    say : string
    name : string
    sayHello : () => string
}

export default function MyText(props:IMyText){

    const [name, setName] = useState("")

    return (<div className={`myName ${style['my-name']}`}>
        <div>{props.sayHello()}{" "}{props.say}{" "}{props.name}</div>
        <div>
            <input 
                type="text" 
                name="name" value={name} 
                onChange={(e) => setName(e.target.value)} 
                autoComplete="false" 
            />
        </div>
        <div>
            Output : {name}
        </div>
    </div>)
}