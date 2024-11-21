
import { Route, Routes } from 'react-router-dom'
// import './App.css' // berlaku untuk semua

import Home from "./pages/home"
import About from './pages/about'

import Nav from './components/Nav'

function App() {
  return (
    <>
      <h1> Aries Dimas </h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App