// create store 
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

// app/store.js
export const store = configureStore({
    reducer: {
        todo: todoReducer, // This 'todo' key is what we need to reference
    },
});

// till now no reducer therefore store some empty object 