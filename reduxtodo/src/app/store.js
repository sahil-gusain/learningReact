import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../featuretodo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})