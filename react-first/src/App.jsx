import { useState } from 'react'
import Noob from './Noob'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  function updateCount(){
    if(count<20) setCount(count+1);
  }
  function removeCount(){
    if(count>0) setCount(count-1);
  }

  return (
    <>
    <Noob/>
      <button onClick={updateCount}>Increase {count}</button>
      <button onClick={removeCount}>Decrease {count}</button>
    </>
  )
}

export default App
