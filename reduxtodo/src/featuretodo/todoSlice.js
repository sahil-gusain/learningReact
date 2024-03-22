import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todo :[{id:1,todo:'msg',completed:false}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state,action) =>{
            const newtodo={
                id:nanoid(),
                todo:action.payload.msg,
                completed:false
            }
            state.todo.push(newtodo)
        },

        removeTodo: (state, action) => {
            state.todo = state.todo.filter((prev) => prev.id !== action.payload.ID);
        },
        updateTodo : (state,action) => {
            state.todo.map((prev)=>{
                if(prev.id == action.payload.ID){
                  return prev.todo = action.payload.msg
                }
                return prev
            })
        }
    }
})
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer