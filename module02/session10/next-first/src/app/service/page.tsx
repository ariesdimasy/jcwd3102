"use client"
import { useState } from "react"

export default function Service(){

    const [hello, setHello] = useState("hello")

    return (<div>
        <h1> service </h1>
        <div>{hello}</div>
        <button onClick={() => setHello("KOnnichiwa")}>
            Click Me
        </button>
    </div>)
}