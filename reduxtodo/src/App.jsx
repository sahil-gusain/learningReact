import { useState } from 'react'
import TodoForm from './components/TodoForm'
import ViewTodo from './components/ViewTodo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='bg-slate-500'>
    <TodoForm/>
    <ViewTodo/>
  </div>
  </>
  )
}

export default App
