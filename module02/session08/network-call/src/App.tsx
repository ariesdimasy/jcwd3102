
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './pages/detail'
import AddUser from './pages/add-user'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // handleGetUser()
    handleGetUserAxios()
  },[])

  // const handleGetUser = async () => {
  //   const fetchuser = await fetch('http://localhost:4500/users',{
  //     method:"GET",
  //     headers:{

  //     },
    
  //   })
  //   const dataUser = await fetchuser.json()
  //   setUsers(dataUser) // masukkan kedalam state 
  // }

  const handleGetUserAxios = async () => {
    const fetchuser = await axios.get("http://localhost:4500/users")
    const dataUser = fetchuser.data
    setUsers(dataUser)
  }

  const UserPage = () => {
    return (<div>
      <table width={500} border={1} cellPadding={10} cellSpacing={1}>
      <thead>
        <th>
          Name
        </th>
        <th>
          Age
        </th>
        <th>
          Address
        </th>
        <th>
          Title
        </th>
        <th> Detail </th>
      </thead>
      <tbody>
        {users.map(
          (item:{ id:number, name:string, age:number, address:string, title:string}, index:number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.title}</td>
                <td>
                  <a href={`/detail/${item.id}`}> View Detail </a>
                </td>
              </tr>
            )
          )
        }
      </tbody>
     </table>
    </div>)
  }


  return (
    <>
    <h1> Users </h1>
    <hr></hr>
      <nav>
        <a href='/'> home </a> | 
        <a href='/add'> add </a>
      </nav>
    <hr></hr>
     <Routes>
      <Route path='/' element={<UserPage />} />
      <Route path='/add' element={<AddUser />}/>
      <Route path='/detail/:id' element={<Detail />}/>
     </Routes>
    </>
  )
}

export default App
