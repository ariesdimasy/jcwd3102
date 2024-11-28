import { useState, useContext, createContext } from "react"

// interface IProps {
//     user:string
// }

const UserContext = createContext("")

export default function SampleContext(){
    
    const [user] = useState<string>("Pahmi")

    return (
    <UserContext.Provider value={user}>
        <div style={{ border:"1px solid black", padding:20}}>
            <h3>Hello {user}</h3>
            <Component1 />
        </div>
    </UserContext.Provider>
    )
}

function Component1(){

    const user = useContext<string>(UserContext)

    return (<div style={{ border:"1px solid orange", padding:20}}>
        <h4> Component 1</h4>
        <div> Name : {user}</div>
        <Component2  />
    </div>)
}

function Component2(){
    return (<div style={{ border:"1px solid crimson", padding:20}}>
        <h4> Component 2 </h4>
        <Component3  />
    </div>)
}

function Component3() {

    const user = useContext<string>(UserContext)

    return (<div style={{ border:"1px solid green", padding:20}}>
        <h4> Component 3 </h4>
        <div>{user}</div>
    </div>)
}
