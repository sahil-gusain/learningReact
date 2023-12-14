import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import User from './components/user'
import './App.css'
import { useState } from 'react'

function App() {
  const [user,setuser] = useState('user')
  return (
    <>
      <UserContextProvider >
        <h1>welcome to the Login Page</h1>
        <Login/>
        <User/>
      </UserContextProvider>
    </>
  )
}

export default App
