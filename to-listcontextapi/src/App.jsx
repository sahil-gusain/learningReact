import { useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos,setTodos] =useState([])
  const [counter,setCounter]=useState(0)
 
  const addTodo=(todo)=>{
     setCounter(counter+1);
     setTodos([...todos,{id:counter,msg:todo,completed:false}])
     
  }

  const updateTodo = (id, updatedTodoMsg) => {
    const updatedTodos = todos.map((prev) => {
      if (prev.id === id) {
        return { ...prev, msg: updatedTodoMsg };
      }
      return prev;
    });
  
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) =>{
    const updatedTodo = todos.filter((prev)=>{prev.id !== id})
    setTodos(updatedTodo)
  }
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((prev) => {
      if (prev.id === id) {
        return { ...prev, completed: !prev.completed };
      }
      return prev;
    });
  
    setTodos(updatedTodos);
  };

  return (
    <>
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
  
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       
                        {todos.length > 0 && todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App
