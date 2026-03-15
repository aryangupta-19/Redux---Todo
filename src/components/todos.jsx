import {useSelector} from "react-redux";
import AddForm from "./addForm";
import {useDispatch} from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    // console.log(todos);

    function handleDelete(id){
        console.log("Delete Task");
        dispatch(deleteTodo(id));
    }

    function handleMarking(id){
        console.log("Marking: ", id);
        dispatch(markAsDone(id));
    }

    return (
        <>
        <h2> Add Your Todos Here </h2>
        <br></br>
        <br></br>
            <AddForm/>

            <h4>Todos-List</h4>
            <div className="list-container">
                <ul className="task-list">
                    {
                        todos.map((todo) => (
                            <li key={todo.id} style = {todo.isDone? {textDecoration: "line-through"}: {}}>

                                {todo.task}

                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

                                <button onClick = {() => handleMarking(todo.id)}> Mark As Done </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    );
}