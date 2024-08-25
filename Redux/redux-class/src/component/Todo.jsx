import { useSelector } from "react-redux"
import AddFrom from "./AddForm"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/TodoSlice"
import { markAsDone } from "../features/todo/TodoSlice"


export default function Todo() {
    const todos = useSelector((state)=> state.todos)
    console.log(todos)
 
    const dispatch = useDispatch();

    let clickHandler = (id)=>{
           console.log('delete',id)
           dispatch(deleteTodo(id))
    }

    let markDone = (id)=>{
        console.log('click',id)
        // dispatch(markAsDone(id))
      
    }

    return(
        <>
            <h2>Todos</h2>
            <AddFrom/>
            <ul>
                {todos.map((todo)=>(<li key={todo.id}>
                {todo.task}
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
                <button onClick={()=> markDone(todo.id)}> Mark as Done</button>
                </li>))}
                
            </ul>
        </>
    )
}