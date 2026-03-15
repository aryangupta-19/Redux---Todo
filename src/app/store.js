// create store 
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({ // return us our object/store which will be stored in a variable store-> whenever a new store created pass reducers to it 
    reducer: todoReducer,
});

// till now no reducer therefore store some empty object 