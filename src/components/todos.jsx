import {useSelector} from "react-redux";
import AddForm from "./addForm";
import {useDispatch} from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    // const todos = useSelector((state) => state.todos);
    const todos = useSelector((state) => state.todo.todos);
    console.log("todos:", todos);
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
                                                        
                            <li key={todo.id} className="task-item">
                            <span className="task-text">{todo.task}</span>

                            <div className="btn-group">
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                <button onClick={() => handleMarking(todo.id)}>Mark Done</button>
                            </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    );
}
