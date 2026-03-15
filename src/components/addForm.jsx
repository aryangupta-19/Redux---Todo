import {useState} from "react";
import {useDispatch} from "react-redux"; // note its importing from react-redux not toolkit 
import { addTodo } from "../features/todo/todoSlice";

export default function addForm(){

    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task)); 
        setTask("");
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                > </input>

                <button> Add Task </button>
            </form>
        </>
    );
}