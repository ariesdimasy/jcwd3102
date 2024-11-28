
import './App.css'
import ComponentUseCallback from './components/ComponentUseCallback'
import ComponentuseReducer from './components/ComponentUseReducer'
import Counter from './components/Counter'
import SampleContext from './components/SampleContext'
import SampleMemo from './components/SampleMemo'
import SampleRef from './components/SampleRef'

function App() {
  return (
    <>
    <div style={{ width:"90%", marginBottom:10, display:"flex" , alignItems:'center', gap:10}}>
      <Counter key={1} start={0} operation='add' num={1} />
      <Counter key={2} start={1} operation='multiply' num={2}/>
      <Counter key={3} start={0} operation='add' num={3}/>
      <Counter key={4} start={1} operation='multiply' num={3} />
     
    </div>
    <SampleRef />
    <SampleMemo />
    <SampleContext />
    <ComponentuseReducer />
    <ComponentUseCallback />
    </>
  )
}

export default App
