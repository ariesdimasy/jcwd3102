
import { useEffect } from 'react'
import './App.css'
import Context from './components/Context'
import Counter from './components/Counter'
import People from './components/People'

localStorage.setItem("name","dimas")
sessionStorage.setItem("age","32")
localStorage.setItem("person",JSON.stringify({
  name:"Rian",
  age:17
}))

function App() {

  const name = localStorage.getItem("name")
  const age = sessionStorage.getItem("age")
  const person = localStorage.getItem("person")
  const personObj = JSON.parse(String(person))

  useEffect(() => {
    console.log("name changed ")
  },[name])

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => {
        localStorage.setItem("name","aries")
      }}> Change </button>
      <button onClick={() => {
        localStorage.removeItem("name")
      }}> Delete </button>
      <button onClick={() => {
        localStorage.clear()
      }}> Clear </button>
      <hr></hr>
      <h2>{age}</h2>
      <button onClick={() => {
        sessionStorage.setItem("age","17")
      }}> Change </button>
      <button onClick={() => {
        sessionStorage.removeItem("age")
      }}> Delete </button>
      <button onClick={() => {
        sessionStorage.clear()
      }}> Clear </button>
      <hr></hr>
      <div>Person : {JSON.stringify([1,2,3,[1,2,3]])}</div>
      <div>name : {JSON.stringify(personObj)}</div>
      <hr></hr>
      <Context />
      <hr></hr>
      <Counter />
      <hr></hr>
      <People />
    </>
  )
}

export default App
