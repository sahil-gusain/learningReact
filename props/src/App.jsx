import { useState } from 'react'

import './App.css'
import ButtonsComp from '../components/ButtonsComp'

function App() {
  const [count, setCount] = useState(0)
  let name={
    btn1: "opbtn",
    btn2: "secbtn",
    btn3: "thirdbtn",
    btn4: "fourbtn"

  }
  return (
    <>
      <ButtonsComp Name= {name} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
