import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/home'
import Register from './pages/register'
import Login from "./pages/login"
import Posts from "./pages/posts"

import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/posts" element={<Posts />}  />
      </Routes>
    </>
  )
}

export default App
