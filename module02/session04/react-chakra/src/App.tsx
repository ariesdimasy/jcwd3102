import './App.css'
import Header from './components/Header'
import ListContainer from './components/ListContainer'
import { motion } from "motion/react"

function App() {

  return (
    <>
      <Header />
      <ListContainer />
      <motion.ul style={{ width:100, height:100, backgroundColor:"green"}} animate={{ x: 100 }} />
    </>
  )
}

export default App
