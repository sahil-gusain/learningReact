import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: counter, todo, completed: false }]);
    setCounter(counter + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(event.target.todo.value);
    event.target.todo.value = '';
  };

  return (
    <div className="flex items-center bg-slate-800 w-screen">
     <div className=" items-center bg-gray-100 p-6 rounded-lg">
     <div className="flex items-center p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          
            <input type="text" className="border-gray-300 rounded-md w-full px-3 py-2" name="todo" placeholder="Enter text here" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add</button>
        
        </form>
        </div>
        <ul>
          {todos.map((todoval) => {
            return <li key={todoval.id}>{todoval.todo}</li>;
          })}
        </ul>
      </div>
      </div>
    
  );
}

export default App;
