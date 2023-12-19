import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = (todoText) => {
    setTodos([...todos, { id: counter, todo: todoText, completed: false }]);
    setCounter(counter + 1);
  };
  const deleteFromList = (id) => {
    const updatedTodos = todos.filter((prev) => prev.id !== id);
    setTodos(updatedTodos);
  };
  const toggleRev = (id) => {
    const updatedTodos = todos.map((prev) => {
      if (prev.id === id) {
        return { ...prev, completed: !prev.completed };
      }
      return prev;
    });
    setTodos(updatedTodos);
  };
  const submitForm = (event) => {
    event.preventDefault();
    const todoText = event.target.todo.value;
    addTodo(todoText);
    event.target.todo.value = '';
  };

  return (
    <>
      <form className="flex" onSubmit={submitForm}>
        <input
          type="text"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          name="todo"
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
          Add
        </button>
      </form>

      <div className="flex flex-wrap gap-y-3 w-full">
        {todos.length > 0 &&
          todos.map((todo) => <TodoList key={todo.id} todosprop={todo} onDelete={deleteFromList} toggleChange={toggleRev}/>)}
      </div>
    </>
  );
}

export default TodoForm;