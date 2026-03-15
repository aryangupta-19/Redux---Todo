import './App.css'
import Todo from "./components/todos.jsx";
import {store} from "./app/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store = {store}>
        <Todo/>
      </Provider>
    </>
  )
}

export default App


// first of all create store 
// src -> app-> store

// we should have clearity of three things 
// 1st design -> store setup
// 2nd define actions 
// 3rd write reducers -> functions which are dependent on actions 
// at last put reducers in store 