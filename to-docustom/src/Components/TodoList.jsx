import React, { useState } from 'react';

function TodoList({ todosprop , onDelete,toggleChange}) {
  const [iseditable,changeedit]=useState(false)
  const deleteEleList=()=>{
      onDelete(todosprop.id)
  }  
  const toggleComplete= ()=>{
    toggleChange(todosprop.id)
  }
  if(!todosprop){
        return null;
    }
    return (
    <div className='w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black'>
      <input
        type="checkbox"
        className="cursor-pointer"
        // Add an onChange handler if needed
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`text-center text-white border outline-none w-full bg-transparent rounded-lg  ${todosprop.completed ? "line-through" : ""}`}
        value={todosprop.todo}
        readOnly
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        // Add a disabled attribute based on the todosprop.completed state
        disabled={todosprop.completed}
      >
        {/* Add your content inside the button */}
      </button>

      <button
      className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={deleteEleList}
      >
      ❌
      </button>
    </div>
  );
}

export default TodoList;