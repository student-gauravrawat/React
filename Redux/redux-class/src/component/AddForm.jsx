import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

export default function AddFrom(){
    const[task, setTask] = useState("");
    const dispatch = useDispatch();

  let submitHandler = (event)=>{
     event.preventDefault();
     console.log(task)
     dispatch(addTodo(task))
     setTask("")

  }
    return (
        <>
            <form onSubmit={submitHandler}>
                 <input type="text" onChange={(e)=> setTask(e.target.value)} />
                 <button>Add Task</button>
            </form>
        </>
    )
}
        

